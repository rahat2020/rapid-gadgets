"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CategoryProps {
  name: string;
  productCount: number;
  imageSrc: string;
  href: string;
}

const categories: CategoryProps[] = [
  {
    name: "Barcode Printers",
    productCount: 34,
    imageSrc: "/assets/Label-Printers.jpg",
    href: "/categories/cases",
  },
  {
    name: "Cash Drawers",
    productCount: 15,
    imageSrc: "/assets/cash_drawer.jpg",
    href: "/",
  },
  {
    name: "Card Readers",
    productCount: 18,
    imageSrc: "/assets/cardencoder.jpg",
    href: "/",
  },
  {
    name: "Pos Printers",
    productCount: 12,
    imageSrc: "/assets/POS-Printer.jpg",
    href: "/categories/charger",
  },
  {
    name: "Post Software",
    productCount: 38,
    imageSrc: "/assets/Mobile-Printer.jpg",
    href: "/",
  },
  {
    name: "Portable Printers",
    productCount: 18,
    imageSrc: "/assets/portable_printer.jpg",
    href: "/",
  },
  {
    name: "PDT",
    productCount: 13,
    imageSrc: "/assets/PDT.jpg",
    href: "/",
  },
];

export default function ProductCategories() {
  return (
    <div className="w-full py-12 px-4 md:px-6 container mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        grabCursor={true}
        className="foodCard"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          468: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <Link
              href={category.href}
              className="flex flex-col items-center text-center group hover:bg-gray-100 transition-colors duration-300 ease-in-out p-4 rounded-lg"
            >
              <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
                <Image
                  src={category.imageSrc || "/placeholder.svg"}
                  alt={category.name}
                  width={60}
                  height={60}
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-[1.3rem] font-medium text-gray-900">
                {category.name}
              </h3>
              <p className="text-[1rem] text-gray-500">
                {category.productCount} products
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
              <Image
                src={category.imageSrc || "/placeholder.svg"}
                alt={category.name}
                width={60}
                height={60}
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-[1.3rem] font-medium text-gray-900">
              {category.name}
            </h3>
            <p className="text-[1rem] text-gray-500">
              {category.productCount} products
            </p>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
