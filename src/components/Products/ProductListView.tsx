import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "react-feather";

type Product = {
  id: number;
  title: string;
  price: number;
  status?: string;
  currency: string;
  features: string[];
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductListView({ product }: ProductCardProps) {
  return (
    <div className="flex justify-center items-center border border-gray-200 rounded-md p-4 w-full bg-white">
      <Link href={`/product/${product?.id}`}>
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative flex justify-center items-center">
          <Image
            src={product?.image || "/placeholder.svg"}
            alt={product?.title}
            fill
            className="object-cover border-r border-gray-400 pr-4"
          />
        </div>
      </Link>

      <Link href={`/product/${product?.id}`}>
        <div className="ml-6 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              {product?.title}
            </h2>

            <div className="mt-2 space-y-1 flex flex-row items-center gap-2">
              {product?.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center text-sm text-gray-500"
                >
                  <Check className="h-4 w-4 text-brand" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-brand mr-1" />
              ))}
            </div>

            <p className="mt-2 text-base text-black font-bold">
              Start from {product?.currency} {product?.price}
            </p>
          </div>
        </div>
      </Link>

      <div className="ml-auto flex items-start">
        <Link href={`/product/${product?.id}`}>
          <button
            role="button"
            tabIndex={0}
            className="px-6 py-2 border cursor-pointer font-bold border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
          >
            BUY NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
