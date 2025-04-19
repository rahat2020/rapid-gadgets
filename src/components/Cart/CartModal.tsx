"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { size } from "lodash";
import { X, Plus, Minus, ShoppingCart } from "react-feather";
import toastAlert from "@/utils/toastConfig";
import { alterCardImage } from "@/utils/appHelpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  removeItemFromCart,
  updateQuantityForAuthUser,
} from "@/helpers/restApiRequest";
import {
  addCheckoutItemsToStorage,
  changeQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface itemData {
  cartId: string | number;
  id: string | number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

type CartItems = {
  price: number;
  quantity: number;
};

type HandleChangeItemMutationArgs = {
  guest_id?: string;
  quantity: number;
};
interface RemovingState {
  status: boolean;
  selectedData: string | number;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const router = useRouter();
  const toastId = useRef<null | string>(null);
  const dispatch = useAppDispatch();

  // redux states
  const { cartData, checkoutCartItem, guestUserId } = useAppSelector(
    (state) => state.cart
  );

  // states
  const [removing, setRemoving] = useState<RemovingState>({
    status: false,
    selectedData: "",
  });

  const updatedCartData = useMemo(
    () => cartData || checkoutCartItem,
    [cartData, checkoutCartItem]
  );

  const isEmptyCart = size(updatedCartData) === 0;

  const total = useMemo(
    () =>
      updatedCartData.reduce(
        (sum: number, item: CartItems) => sum + item.price * item.quantity,
        0
      ),
    [updatedCartData]
  );

  if (!isOpen) return null;

  // change quantity api
  const hanldeChangeItemMutation = async (
    { quantity }: HandleChangeItemMutationArgs,
    id: string | number
  ) => {
    const updatedMutationData = {
      quantity: quantity,
      ...(guestUserId ? { guest_id: guestUserId } : {}),
    };

    try {
      const response = await updateQuantityForAuthUser(updatedMutationData, id);
      if (size(response)) {
        toastAlert("success", "Quantity updated", "top-right", toastId);
      }
    } catch (err) {
      console.log(err);
      toastAlert("error", "Item removed failed", "top-right", toastId);
    }
  };

  // change quantity
  const handleChangeQuantity = async (
    data: itemData,
    context: "increase" | "decrease"
  ) => {
    const isItemQuantityLessThanZero = updatedCartData?.some(
      (item: { id: number | string }) =>
        item?.id === data?.id && data?.quantity === 1 && context === "decrease"
    );

    if (context === "increase") {
      dispatch(
        changeQuantity({
          items: data,
          quantity: data.quantity + 1,
        })
      );
      hanldeChangeItemMutation({ quantity: data.quantity + 1 }, data?.cartId);
    } else {
      dispatch(
        changeQuantity({
          items: data,
          quantity: data.quantity - 1,
        })
      );
      if (!isItemQuantityLessThanZero) {
        hanldeChangeItemMutation({ quantity: data.quantity - 1 }, data?.cartId);
      }
    }
  };

  // remove  item from cart
  const handleRemove = async (item: itemData) => {
    setRemoving({ status: true, selectedData: item?.id });
    try {
      const response = await removeItemFromCart(item?.cartId);
      if (size(response)) {
        setRemoving({ status: false, selectedData: "" });
        dispatch(removeFromCart({ items: item }));
        toastAlert("success", "Removed item from cart", "top-right");
      }
    } catch (err) {
      setRemoving({ status: false, selectedData: "" });
      const { response } = err as { response: { data: { message: string } } };
      toastAlert("error", response?.data?.message, "top-right", toastId, {
        autoClose: 4000,
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "cart-backdrop") {
      onClose();
    }
  };

  const handleRedirect = () => {
    dispatch(addCheckoutItemsToStorage(updatedCartData));
    router.push("/checkout");
    onClose();
  };

  return (
    <div
      id="cart-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-white/50 z-50 flex justify-end transition-all duration-200 ease-out"
    >
      <div
        className="h-full max-w-md w-full bg-white shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 mr-2 text-brand" />
            <h2 className="font-semibold text-18 text-border-dark">
              Your Cart
            </h2>
          </div>
          <button
            role="button"
            tabIndex={0}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <X className="h-5 w-5 text-border-dark" />
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
          {isEmptyCart ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {updatedCartData.map((item: itemData) => (
                <div
                  key={item?.id}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <Image
                    src={item?.image || alterCardImage}
                    alt={item?.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item?.name}</h3>
                    <p className="text-gray-600">
                      AED {Math.round(item?.price)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        role="button"
                        tabIndex={0}
                        onClick={() => handleChangeQuantity(item, "decrease")}
                        className="p-1 w-5 h-5 rounded-full bg-brand flex justify-center items-center cursor-pointer"
                      >
                        <Minus className="h-4 w-4 text-white" />
                      </button>
                      <span className="w-8 text-center">{item?.quantity}</span>
                      <button
                        role="button"
                        tabIndex={0}
                        onClick={() => handleChangeQuantity(item, "increase")}
                        className="p-1 w-5 h-5 rounded-full bg-brand flex justify-center items-center cursor-pointer"
                      >
                        <Plus className="h-4 w-4 text-white" />
                      </button>
                      <button
                        role="button"
                        tabIndex={0}
                        onClick={() => handleRemove(item)}
                        className={`ml-4 text-brand hover:text-red-600 cursor-pointer ${
                          removing.selectedData === item?.id
                            ? "text-red-400 "
                            : ""
                        }`}
                      >
                        {removing.selectedData === item?.id
                          ? "Removing"
                          : "Remove"}
                      </button>
                    </div>
                  </div>
                  <div className="font-medium">
                    AED {Math.round(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        {!isEmptyCart && (
          <div className="border-t p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-16 text-border-dark">Total</span>
              <span className="font-bold text-lg text-border-dark">
                AED {Math.round(total)}
              </span>
            </div>
            <button
              role="button"
              tabIndex={0}
              onClick={() => handleRedirect()}
              className="w-full cursor-pointer bg-brand hover:bg-bgLight text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Proceed to checkout
            </button>
          </div>
        )}

        <div className="px-4 pb-4">
          <button
            role="button"
            tabIndex={0}
            onClick={onClose}
            className="w-full cursor-pointer bg-brand-secondary hover:bg-[#111111e7] text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
