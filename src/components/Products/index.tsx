"use client";

import { useState } from "react";
import { Grid, List } from "react-feather";
import FilterSidebar from "./FilterSidebar";
import CommonHeader from "../common/CommonHeader";
import {
  filterBrandItems,
  filterCateogryItems,
  filterPriceItems,
  productsData,
  showOptions,
  sortDropdownData,
} from "@/data/productsData";
import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";
import AppDropdown from "@/helpers/ui/AppDropdown";

export default function AllProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleAppDropdown = (data) => {
    console.log(data);
  };

  return (
    <section>
      <CommonHeader
        title="All"
        subtitle="Products"
        componentTitle="All Products"
      />
      <div className="py-16 px-4 md:px-12 bg-[#F2F4F8]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 shrink-0">
              <FilterSidebar options={filterCateogryItems} label="Categories" />
              <FilterSidebar
                options={filterBrandItems}
                label="Brand"
                customClasses="mt-4"
              />
              <FilterSidebar
                options={filterPriceItems}
                label="Price"
                customClasses="mt-4"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-gray-600">
                    Show
                  </span>
                  <AppDropdown
                    options={showOptions}
                    label="Select a category"
                    selectedValue={{
                      id: 1,
                      label: "25 per page",
                      value: 25,
                    }}
                    callback={handleAppDropdown}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-center md:items-center gap-2">
                  <div className="flex justify-center items-center gap-2 mr-4">
                    <p className="text-base font-semibold text-gray-600">
                      Sort by
                    </p>
                    <div className="">
                      <AppDropdown
                        options={sortDropdownData}
                        label="Select a category"
                        selectedValue={{
                          id: 1,
                          label: "Newest Item",
                          value: "newest",
                        }}
                        callback={handleAppDropdown}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center gap-2">
                    <p className="text-base font-semibold text-gray-600">
                      View as
                    </p>
                    <div className="flex border border-gray-200 rounded-md">
                      <button
                        role="button"
                        tabIndex={0}
                        className={`p-3 cursor-pointer ${
                          viewMode === "grid" ? "bg-gray-100" : ""
                        }`}
                        onClick={() => setViewMode("grid")}
                      >
                        <Grid
                          size={18}
                          className={viewMode === "grid" && "text-brand"}
                        />
                      </button>
                      <button
                        role="button"
                        tabIndex={0}
                        className={`p-1.5 cursor-pointer ${
                          viewMode === "list" ? "bg-gray-100" : ""
                        }`}
                        onClick={() => setViewMode("list")}
                      >
                        <List
                          size={18}
                          className={viewMode === "list" && "text-brand"}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`grid ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1"
                } gap-4`}
              >
                {productsData?.map((product, index) =>
                  viewMode === "grid" ? (
                    <ProductGridView
                      key={index}
                      product={product}
                      viewMode={viewMode}
                    />
                  ) : (
                    <ProductListView key={index} product={product} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
