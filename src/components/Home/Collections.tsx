"use client";
import CommonTitle from "@/helpers/ui/CommonTitle";
import Image from "next/image";

type CollectionItem = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
};

// Collection data
const collections: CollectionItem[] = [
  {
    id: 1,
    title: "ABAYAS",
    imageUrl: "/assets/Abayas1.webp",
    link: "/collections/abayas",
  },
  {
    id: 2,
    title: "FORMAL HIJAB",
    imageUrl: "/assets/Festive.webp",
    link: "/collections/formal-hijab",
  },
  {
    id: 3,
    title: "HIJABS",
    imageUrl: "/assets/Hijabs.webp",
    link: "/collections/hijabs",
  },
  {
    id: 4,
    title: "CHADAR",
    imageUrl: "/assets/Chadar.webp",
    link: "/collections/chadar",
  },
];

export default function Collections() {
  return (
    <div className="w-full mx-auto px-4 md:px-20 py-12">
      <CommonTitle title="COLLECTION LIST" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {collections.map((collection) => (
          <div
            key={collection?.id}
            className="aspect-[3/4] relative overflow-hidden group"
          >
            <Image
              src={collection.imageUrl || "/placeholder.svg"}
              alt={`${collection.title} collection`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>

            {/* Title at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <h2 className="text-white text-lg md:text-xl tracking-widest font-light">
                {collection.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
