"use client";

import CommonHeader from "../common/CommonHeader";
import { MenuCard } from "./MenuCard";
import { burkaData } from "@/data/burkaData";

const MenuComponent = () => {
  return (
    <section className="min-h-screen bg-[#f2f2f25b]">
      <CommonHeader title="Shop" componentTitle="Shop" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {burkaData?.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
