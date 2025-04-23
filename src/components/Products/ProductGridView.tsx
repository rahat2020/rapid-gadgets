import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  status?: string;
  price: number;
  features: string[];
  currency: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  viewMode: "grid" | "list";
};

export default function ProductGridView({
  product,
  viewMode,
}: ProductCardProps) {
  return (
    <div
      className={`overflow-hidden bg-white hover:shadow-md transition-shadow ${
        viewMode === "list" ? "flex" : ""
      }`}
    >
      <Link href={`/product/${product?.id}`}>
        <div className={`${viewMode === "list" ? "w-1/3" : "w-full"}`}>
          <div className="aspect-square relative ">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-contain p-4 border-r"
            />
          </div>
        </div>
        <div
          className={`p-4 flex flex-col ${viewMode === "list" ? "w-2/3" : ""}`}
        >
          <h3 className="text-sm font-medium mb-2">{product.title}</h3>
          <div className="mt-auto mx-auto">
            <Link
              href="/"
              className="block mb-2 text-[1.2rem] font-semibold text-brand hover:text-blue-500"
            >
              Start form {product.currency} {product.price}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
