"use client";
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { size } from "lodash";
import { Truck, Package, CheckCircle } from "react-feather";
import { useRouter } from "next/navigation";
import CommonHeader from "../common/CommonHeader";
import { getOrdersData } from "@/helpers/restApiRequest";
import { useAppSelector } from "@/redux/hooks/hooks";

const steps = [
  {
    id: 1,
    name: "Order Received",
    description: "Your order has been received",
    icon: Package,
    status: "complete",
  },
  {
    id: 2,
    name: "Processing",
    description: "We're preparing your order",
    icon: Package,
    status: "complete",
  },
  {
    id: 3,
    name: "Completed",
    description: "Your order is on its way",
    icon: Truck,
    status: "current",
  },
  {
    id: 4,
    name: "Delivered",
    description: "Order has been delivered",
    icon: CheckCircle,
    status: "upcoming",
  },
];

const getOrderStatus = (value) => {
  const orderStatus = {
    "Order Received": "bg-brand w-1/4",
    Processing: "bg-brand w-2/4",
    Completed: "bg-brand w-3/4",
    Delivered: "bg-brand w-4/4",
  };
  return orderStatus[value] || "bg-gray-200";
};

const getOrderStatusForIcon = (currentStatus, stepName) => {
  const statusOrder = [
    "Order Received",
    "Processing",
    "Completed",
    "Delivered",
  ];

  // Check if the stepName is the current status or before it in sequence
  const currentIndex = statusOrder.indexOf(currentStatus);
  const stepIndex = statusOrder.indexOf(stepName);

  return stepIndex <= currentIndex ? "bg-brand" : "bg-gray-200";
};

const OrderTrackingComponent = () => {
  const router = useRouter();

  // redux states
  const { user } = useAppSelector((state) => state.user);
  const [orderInfo, setOrderInfo] = useState([]);

  const orderId = useMemo(
    () => orderInfo?.map((item) => item?.id),
    [orderInfo]
  );

  const getOrderInfo = async () => {
    try {
      const response = await getOrdersData();
      if (size(response)) {
        setOrderInfo(response?.data?.orders);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    getOrderInfo();
    const intervalId = setInterval(() => {
      getOrderInfo();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useLayoutEffect(() => {
    if (size(user) < 0) {
      router.push("/");
      router.prefetch("/");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <CommonHeader
        title="Track"
        secondarySubTitle="order"
        subtitle={`#${orderId}`}
        componentTitle="Tracking"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-lg bg-white shadow">
          {orderInfo?.map((order) => {
            const { id, delivery_address, status, order_items, total_amount } =
              order || {};
            return (
              <div className="px-4 py-5 sm:p-6" key={id}>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Order #{id}
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Estimated delivery: June 15, 2023
                </p>

                <div className="mt-6">
                  <div className="overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-2 ${getOrderStatus(status)} rounded-full`}
                    ></div>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps?.map((step) => (
                      <div key={step?.id} className="relative">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full ${getOrderStatusForIcon(
                            status,
                            step?.name
                          )}`}
                        >
                          <step.icon
                            className={`h-6 w-6 ${
                              getOrderStatusForIcon(status, step?.name) ===
                              "bg-brand"
                                ? "text-white"
                                : "text-gray-500"
                            }`}
                          />
                        </div>

                        <div className="mt-2">
                          <p className="font-medium text-gray-900">
                            {step?.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {step?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-lg font-medium text-gray-900">
                    Order Details
                  </h2>
                  <div className="mt-4 divide-y divide-gray-200">
                    {order_items?.map((item) => (
                      <div
                        key={item?.id}
                        className="flex items-center justify-between py-4"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item?.name || ""}
                          </p>
                          <p className="text-sm text-gray-500">
                            Quantity: {item?.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {Math.round(item?.price)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-sm font-medium text-gray-900">
                      AED {Math.round(total_amount)}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-lg font-medium text-gray-900">
                    Delivery Address
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {user?.fullname}
                    <br />
                    <span>{delivery_address}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(OrderTrackingComponent);
