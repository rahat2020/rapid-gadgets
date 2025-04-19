"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "../common/CommonHeader";

const CartComponet = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Italian Pasta",
      price: 7.0,
      originalPrice: 10.0,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cart-3kRnj9LUWyTLgDk9L4AM25HnUGE5ez.png",
      description:
        "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo...",
      quantity: 611,
    },
    {
      id: 2,
      name: "Fish & White Rice",
      price: 30.0,
      originalPrice: 33.0,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cart-3kRnj9LUWyTLgDk9L4AM25HnUGE5ez.png",
      description:
        "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo...",
      quantity: 741,
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateTotals = () => {
    return cartItems.reduce(
      (acc, item) => {
        const itemTotal = item.quantity * item.price;
        const itemOriginalTotal =
          item.quantity * (item.originalPrice || item.price);
        return {
          subtotal: acc.subtotal + itemTotal,
          total: acc.total + itemTotal,
          savings: acc.savings + (itemOriginalTotal - itemTotal),
        };
      },
      { subtotal: 0, total: 0, savings: 0 }
    );
  };

  const { subtotal, total } = calculateTotals();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  // ANIMATE ON SCROLL
  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000, easing: "ease-out" });
  });

  return (
    <div>
      {/* Hero Section */}
      <CommonHeader title="Cart" subtitle="Cart" componentTitle="cart" />

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">PRODUCT</h2>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                savings={(item.originalPrice - item.price) * item.quantity}
                onQuantityChange={(quantity) =>
                  updateQuantity(item.id, quantity)
                }
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </div>

          {/* Cart Totals */}
          <div>
            <CartTotals
              subtotal={subtotal}
              total={total}
              onCheckout={() => handleCheckout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponet;
