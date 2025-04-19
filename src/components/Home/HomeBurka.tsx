import { burkaData } from "@/data/burkaData";
import React from "react";
import ProductCard from "../SingleFood/ProductCard";
import CommonTitle from "@/helpers/ui/CommonTitle";

const HomeBurka = () => {
  return (
    <div className="w-full h-full mx-auto px-4 md:px-20 py-12">
      <CommonTitle title="Abayas" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {burkaData?.map((burka) => (
          <ProductCard data={burka} key={burka?.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeBurka;
