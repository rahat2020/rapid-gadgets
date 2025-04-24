"use client";

import { useState } from "react";
import { productsData } from "@/data/productsData";
import ProductCard from "@/components/SingleFood/ProductCard";

// Get unique brands from products
const brands = [
  "All Brands",
  ...Array.from(new Set(productsData.map((product) => product.brand))),
];

export default function BrandNProducts() {
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");

  // Filter products based on selected brand
  const filteredProducts =
    selectedBrand === "All Brands"
      ? productsData
      : productsData.filter((product) => product.brand === selectedBrand);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">Your favourite brands</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Branded Products
        </h1>
        <p className="text-gray-600 text-base font-medium">
          How can you evaluate proudcts without branded quality
        </p>
      </div>

      {/* Brand Filter Section */}
      <div className="mb-8 flex justify-center items-center">
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <button
              role="button"
              tabIndex={0}
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 cursor-pointer rounded-md text-base font-semibold transition-colors mb-2 ${
                selectedBrand === brand
                  ? "bg-brand text-white hover:bg-blue-800"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          {selectedBrand === "All Brands"
            ? "All Products"
            : `${selectedBrand} Products`}
          <span className="ml-2 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {filteredProducts.length}
          </span>
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            index={product?.id}
            key={product?.id}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-500">Try selecting a different brand</p>
        </div>
      )}
    </div>
  );
}
