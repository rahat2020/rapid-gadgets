"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star } from "react-feather";

const ProductCard = ({
  product,
  index,
}: {
  product: {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    image?: string;
  };
  index: number;
}) => {
  return (
    <div>
      <div
        key={index}
        className="flex flex-col relative group group-hover:shadow-2xl"
      >
        {/* {product.tag && (
              <div className="absolute -top-2 -right-2 z-10">
                <div className="bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {product.tag}
                </div>
              </div>
            )} */}
        <Link href={`/product/${product.id}`}>
          <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center h-48 relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={100}
              height={200}
              className="h-full w-auto object-contain transition-transform group-hover:scale-95"
            />

            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Share Icon */}
              {/* <button className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </button> */}

              {/* Search Icon */}
              <button className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              {/* Heart Icon */}
              <button className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <button
              role="button"
              tabIndex={0}
              className="absolute inset-x-0 bottom-0 bg-brand cursor-pointer text-white py-2 text-center text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform"
            >
              ADD TO CART
            </button>
          </div>
        </Link>

        <Link href={`/product/${product.id}`}>
          <div className="flex group-hover:shadow-lg rounded-md pb-2 px-2 flex-col items-center text-start">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              {product.title}
            </h3>
            <p className="text-base font-medium text-gray-700 mb-1">
              {product.subtitle}
            </p>
            <p className="flex items-center mb-1">
              <Star className="w-4 h-4 text-yellow-400 inline-block" />
              <Star className="w-4 h-4 text-yellow-400 inline-block" />
              <Star className="w-4 h-4 text-yellow-400 inline-block" />
              <Star className="w-4 h-4 text-yellow-400 inline-block" />
              <Star className="w-4 h-4 text-yellow-400 inline-block" />
            </p>
            <p className="text-base font-medium text-gray-900">
              AED {product.price}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
