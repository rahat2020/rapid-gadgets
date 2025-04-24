import AppButton from "@/helpers/ui/AppButton";
import Image from "next/image";
import { ChevronsRight } from "react-feather";

export default function Offer() {
  return (
    <div className="w-full container mx-auto py-12">
      <div className="relative bg-[#e8e5d865] rounded-lg overflow-hidden p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="z-10 mb-8 md:mb-0 md:w-1/2">
          <p className="text-brand font-semibold text-base mb-2 uppercase">
            EXCLUSIVE products
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Discounts 50% On
            <br className="hidden sm:block" /> This items.
          </h2>
          <AppButton
            title="SHOP NOW"
            link="/products"
            showIcon
            btnIcon={ChevronsRight}
          />
        </div>

        {/* Right content - Headphone images */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/2 gap-2">
          <div className="relative h-[180px] md:h-[250px] w-[360px] md:w-[550px]">
            {/* Black headphones */}
            <Image
              src="/assets/ID-Card-Printer.jpg"
              alt="Black over-ear headphones"
              width={180}
              height={180}
              className="absolute left-0 bottom-0 transform -translate-y-4 object-contain animate-float-item-one"
              priority
            />

            {/* AirPods */}
            <Image
              src="/assets/portable_printer.jpg"
              alt="White wireless earbuds with charging case"
              width={140}
              height={120}
              className="absolute left-1/2 top-1/2 animate-float-item-one transform -translate-x-1/2 -translate-y-1/2 object-contain"
              priority
            />

            {/* Blue headphones */}
            <Image
              src="/assets/barcode-scanner.jpg"
              alt="Blue over-ear headphones"
              width={180}
              height={180}
              className="absolute right-0 bottom-0 transform animate-float-item-one -translate-y-4 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
