"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronDown } from "react-feather";
import CommonHeader from "../common/CommonHeader";
import Link from "next/link";
import { cartItemsData } from "@/data/productsData";

interface CartItem {
  id: number;
  name: string;
  platform: string;
  image: string;
  price: number;
  quantity: number;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemsData);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <section>
      <CommonHeader title="Cart" componentTitle="cart" />
      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Shopping Cart Section */}
          <div className="lg:col-span-2 bg-white rounded-md shadow-sm">
            <div className="border-b p-6 border-gray-200">
              <div className="flex justify-between items-center">
                <h1 className="text-[1.44rem] font-medium text-gray-700">
                  Shopping Cart
                </h1>
                <span className="text-gray-600 font-medium text-[1.44rem]">
                  {cartItems.length} Items
                </span>
              </div>
            </div>

            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-12 px-6 py-3 text-xs uppercase text-gray-500 border-b border-gray-200">
              <div className="col-span-6 text-base font-medium">
                Product Details
              </div>
              <div className="col-span-2 text-center text-base font-medium">
                Quantity
              </div>
              <div className="col-span-2 text-center text-base font-medium">
                Price
              </div>
              <div className="col-span-2 text-center text-base font-medium">
                Total
              </div>
            </div>

            {/* Cart Items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 items-center border-gray-200"
                >
                  <div className="col-span-6 flex space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="py-2 text-sm text-rose-500">
                          {item.platform}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="cursor-pointer !text-start"
                      >
                        <span className="px-2 py-0.5 te text-sm font-medium text-white rounded-md bg-brand">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 flex justify-center items-center mt-4 md:mt-0">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-sm text-center w-8">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-center mt-4 md:mt-0">
                    <span className="text-sm text-gray-900">
                      AED {item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="col-span-2 text-center mt-4 md:mt-0">
                    <span className="text-sm font-medium text-gray-900">
                      AED {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="p-6 border-t border-gray-200">
              <button className="flex items-center text-sm cursor-pointer font-semibold text-brand hover:text-blue-800">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-100 rounded-md p-6 h-fit">
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 uppercase">
                  Items {cartItems.length}
                </span>
                <span className="text-sm font-medium">
                  AED {subtotal.toFixed(2)}
                </span>
              </div>

              <div className="pt-4">
                <h3 className="text-sm text-gray-600 uppercase mb-2 font-medium">
                  Shipping
                </h3>
                <div className="flex justify-between items-center border border-gray-200 bg-white rounded-md p-3">
                  <span className="text-sm">Standard Delivery - AED 5.00</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-sm text-gray-600 uppercase mb-2 font-medium">
                  Promo Code
                </h3>
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
                  />
                  <button
                    role="button"
                    tabIndex={0}
                    className="bg-brand hover:bg-blue-500 cursor-pointer p-1 text-white font-medium px-4 rounded-md w-24 transition-colors"
                  >
                    APPLY
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-600 uppercase font-medium">
                    Total Cost
                  </span>
                  <span className="text-lg font-medium">
                    AED {total.toFixed(2)}
                  </span>
                </div>

                <Link href="/checkout">
                  <button className="w-full bg-brand hover:bg-blue-500 cursor-pointer text-white font-medium py-3 px-4 rounded-md uppercase transition-colors">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
