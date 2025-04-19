import { FoodItem } from "@/types/types";
import { alterCardImage } from "@/utils/appHelpers";
import Image from "next/image";

interface MenuCardProps {
  item: FoodItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white p-4 rounded-md border group border-gray-100 cursor-pointer flex items-center gap-4">
      <div className="relative flex-shrink-0">
        <Image
          src={item.image || alterCardImage}
          alt={item.title}
          width={80}
          height={80}
          loading="lazy"
          className="rounded-full w-20 h-20 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h3 className="font-bold text-base md:text-xl text-gray-900">
            {item.title}
          </h3>
          <div className="flex items-center">
            <p className="text-brand font-semibold text-lg">
              Call us for order: ☏ 0541532030
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
      </div>
    </div>
  );
}
