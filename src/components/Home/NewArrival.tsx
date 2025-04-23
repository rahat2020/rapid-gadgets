"use client";
import { productsData } from "@/data/productsData";
import ProductCard from "../SingleFood/ProductCard";
import AppButton from "@/helpers/ui/AppButton";
import { ChevronsRight } from "react-feather";

export default function NewArrival() {
  return (
    <main className="container mx-auto px-4 py-8 w-full">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">Hurry up to buy</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">New Arrivals</h1>
        <p className="text-gray-600 text-base font-medium">
          How can you evaluate content without design
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {productsData?.map((product, index) => (
          <ProductCard product={product} index={index} key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center py-12">
        <AppButton
          title="VIEW MORE"
          link="/products"
          showIcon
          btnIcon={ChevronsRight}
        />
      </div>
    </main>
  );
}
