"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ProductGallery from "./ProductGallery";
import { footerSocialLinks } from "@/data";
import CommonHeader from "../common/CommonHeader";
import { Heart } from "react-feather";

interface SingleFoodComponentProps {
  foodId: string | number;
}

const productImages = [
  "/assets/barcode-scanner.jpg",
  "/assets/POS-Printer.jpg",
  "/assets/Mobile-Printer.jpg",
  "/assets/Label-Printers.jpg",
];

const SingleFoodComponent = ({ foodId }: SingleFoodComponentProps) => {
  console.log(foodId);
  // states
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000, easing: "ease-out" });
  }, []);

  return (
    <div className="w-full">
      {/* hero section */}
      <CommonHeader
        title="Easypos"
        subtitle="EPS204 2D"
        secondarySubTitle="Wireless"
        componentTitle="Single product"
      />
      <div className="md:px-24 px-8 py-12" data-aos="fade-up">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <ProductGallery images={productImages} foodImg="" />
          {/* Product Info */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold">
                Easypos EPS204 2D Wireless Barcode Scanner with removable cable
              </h1>
              {/* <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through">SAR 100</span>
                <span className="text-3xl font-bold">SAR 100</span>
              </div> */}
            </div>

            <p className="text-gray-600">
              The Easypos EPS204 is a versatile 2D wireless barcode scanner
              designed for efficient and accurate scanning. It features a
              removable cable for both wired and wireless operation, offering
              flexibility for various retail, warehouse, and point-of-sale
              environments. With fast decoding and a comfortable ergonomic
              design, it enhances productivity and ease of use.
            </p>
            {/* Product Meta */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div>
                <span className="font-semibold">Shop:</span>{" "}
                <span className="text-brand font-medium">Rapid</span>
              </div>
              <div>
                <span className="font-semibold">Brand:</span>{" "}
                <span className="text-brand font-medium">Easypos</span>
              </div>
              <div>
                <span className="font-semibold">Categories:</span>{" "}
                <Link href="#" className="text-brand capitalize">
                  Pos
                </Link>
              </div>
              {/* <div>
                <span className="font-semibold">Tag:</span>{" "}
                <Link href="#" className="text-red-600">
                  Fish
                </Link>
              </div> */}
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link
                href="/cart"
                className="flex-1 bg-brand text-[1.23rem] text-center hover:bg-blue-700 text-white px-6 cursor-pointer py-3 rounded transition duration-200"
              >
                <button
                  role="button"
                  id="content"
                  tabIndex={0}
                  className="cursor-pointer uppercase"
                >
                  Add To Cart
                </button>
              </Link>
              <button className="p-3 border border-gray-200 rounded hover:bg-gray-50 transition duration-200">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            {/* Social Share */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <span className="font-semibold">Share:</span>
              <div className="flex gap-2">
                {footerSocialLinks?.map(({ link, icon: Icon }, index) => (
                  <Link
                    key={index}
                    href={link}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#28ade2c0] hover:text-white transition duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="mb-16">
          <div className="border-b mb-8 border-gray-200">
            <div className="flex gap-8">
              <button
                className={`pb-4 relative ${
                  activeTab === "description"
                    ? "text-brand after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#28ace2]"
                    : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`pb-4 relative ${
                  activeTab === "reviews"
                    ? "text-brand after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#28ace2]"
                    : ""
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews (0)
              </button>
            </div>
          </div>

          <div className="prose max-w-none">
            {activeTab === "description" ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>
                  The Easypos EPS204 is a versatile 2D wireless barcode scanner
                  designed for efficient and accurate scanning. It features a
                  removable cable for both wired and wireless operation,
                  offering flexibility for various retail, warehouse, and
                  point-of-sale environments. With fast decoding and a
                  comfortable ergonomic design, it enhances productivity and
                  ease of use.
                  <br />
                  Black piping on the sleeves and ruffled cuffs instantly adds a
                  dash of style and grace. *Smocked ruffled cuffs *White piping
                  details on sleeves Fabric: Premium Nada Color: Sandy Brown
                  Scarf Included: No Model is 3 wearing size S and length 54.
                  *Please Note: Color may vary slightly due to photographic
                  lighting sources or your screen settings
                </p>
              </>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodComponent;
