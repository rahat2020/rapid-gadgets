"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    tag: "ON THIS WEEK",
    title: "SPICY FRIED CHICKEN",
    buttonColor: "bg-red-600 hover:bg-red-700",
    image: "/assets/offerThumb.png",
  },
  {
    tag: "WELCOME FODIS",
    title: "TODAY SPACIAL FOOD",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    image: "/assets/offerThumb2.png",
  },
  {
    tag: "ON THIS WEEK",
    title: "SPECIAL CHICKEN ROLL",
    buttonColor: "bg-red-600 hover:bg-red-700",
    image: "/assets/offerThumb.png",
  },
];

const FoodCards = () => {
  // ANIMATE ON SCROLL
  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000, easing: "ease-out" });
  }, []);

  return (
    <div className="w-full py-16 p-4 bg-[#f2f2f25b]" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg bg-black"
          >
            {/* Wooden texture bottom */}
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#2b1810] to-transparent" />

            {/* Content */}
            <div className="relative p-8 min-h-[300px]">
              <div className="space-y-4">
                <span className="text-red-500 font-medium">{card.tag}</span>
                <h2 className="text-3xl font-bold text-white leading-tight">
                  {card.title}
                </h2>
                <p className="text-orange-500">Limits Time Offer</p>
                <button
                  className={`${card.buttonColor} text-white px-8 py-3 rounded flex items-center gap-2 mt-4 transition-colors`}
                >
                  ORDER NOW
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Food Image */}
              <div className="absolute bottom-4 right-4">
                <div className="relative w-32 h-32 animate-float-item-one">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt="Food"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 50% OFF Tag */}
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <div className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full transform rotate-12">
                    50% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
