"use client";
import { memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "react-feather";
import { truncateText } from "@/utils/appHelpers";
import CartModal from "../Cart/CartModal";

import { FoodItem } from "@/types/types";

interface ProductCardProps {
  data: FoodItem;
  callback?: () => void;
  customClasses?: string;
}

const ProductCard = ({
  data,
  customClasses = "w-40 h-40",
}: ProductCardProps) => {
  // Destructuring data
  const { id, image, sub_category, title } = data || {};

  // states
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div
      className="max-w-sm rounded-xl overflow-hidden shadow-lg group bg-white transition-transform duration-300 ease-in-out"
      key={id}
    >
      <div className="relative overflow-hidden">
        {/* Main food image */}
        <Link href={`/product/${id}`}>
          <Image
            src={image}
            alt={title || "abayas"}
            width={200}
            height={200}
            loading="lazy"
            className={`${customClasses} w-full h-[60vh] object-fit transition-transform duration-300 ease-in-out group-hover:scale-110`}
          />
        </Link>
        {/* Discount badge */}
        <div className="absolute top-4 left-4 bg-teal-700 text-white text-xs font-medium px-2 py-3 rounded-full">
          -10%
        </div>
        <div className="absolute top-16 left-4 bg-[#438E44] text-white text-xs font-medium px-2 py-3 rounded-full">
          New
        </div>

        {/* favorite */}
        <div className="flex justify-between items-center">
          <div className="absolute top-4 right-4 text-sm font-medium cursor-pointer border hover:!text-white border-gray-200 p-2 rounded-full hover:bg-[#42d868]">
            <Heart className="w-6 h-6 text-brand hover:!text-white font-bold cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="text-center">
            <h3 className="text-base 2xl:text-xl font-semibold text-gray-900 lowercase first-letter:uppercase">
              {truncateText(title, 25) || ""}
            </h3>
            <p className="text-gray-600 text-sm">{sub_category}</p>
            <p className="text-justify text-gray-500 text-sm mt-2">
              This Casual Abaya has a partial button placket with a
              criss-cross...
            </p>
          </div>

          {/* Rating */}
          {/* <div className="flex items-center justify-center text-center px-2 py-1 rounded">
            <Star className="w-4 h-4 text-gray-500 ml-1 group-hover:fill-orange-500 group-hover:text-orange-500 transition-all duration-300" />
            <Star className="w-4 h-4 text-gray-500 ml-1 group-hover:fill-orange-500 group-hover:text-orange-500 transition-all duration-300" />
            <Star className="w-4 h-4 text-gray-500 ml-1 group-hover:fill-orange-500 group-hover:text-orange-500 transition-all duration-300" />
            <Star className="w-4 h-4 text-gray-500 ml-1 group-hover:fill-orange-500 group-hover:text-orange-500 transition-all duration-300" />
            <Star className="w-4 h-4 text-gray-500 ml-1 group-hover:fill-orange-500 group-hover:text-orange-500 transition-all duration-300" />
          </div> */}
        </div>

        <div className="flex justify-between items-center mt-4">
          {/* <div className="flex justify-between items-center gap-4">
            <span className="text-gray-900 font-medium text-base 2xl:text-lg">
              {currency} {Math.round(Number(price))}
            </span>
          </div> */}
          <div className="flex items-center gap-2">
            {/* <div className="flex gap-2 items-center bg-gray-200 rounded-full">
              <button
                role="button"
                tabIndex={0}
                disabled={cartItem?.id !== id}
                onClick={handleRemoveItem}
                className="uppercase cursor-pointer border border-gray-300 rounded-full h-8 w-8 bg-white hover:bg-slate-100 flex items-center justify-center"
              >
                <Minus className="h-4 w-4 text-gray-600" />
              </button>
              {cartItem ? cartItem?.quantity : 1}
              <button
                role="button"
                tabIndex={0}
                onClick={() => handleAddToCart(data)}
                className="uppercase cursor-pointer border border-gray-300 rounded-full h-8 w-8 text-white bg-white hover:bg-slate-100 flex items-center justify-center"
              >
                <Plus className="h-4 w-4 text-gray-600" />
              </button>
            </div> */}
          </div>
          {/* <div
            role="button"
            tabIndex={0}
            onClick={() => dispatch(setOpenCartModal(true))}
            className="border border-gray-300 cursor-pointer p-2 text-white rounded-full hover:bg-slate-100"
          >
            <ShoppingCart className="w-4 h-4 text-gray-600" />
          </div> */}
        </div>
      </div>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default memo(ProductCard);
