"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    rating: 4,
    text: "Great experience overall. The product is well-designed and functions exactly as described. The only minor issue was the shipping took a bit longer than expected.",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    rating: 5,
    text: "I've tried many similar products before, but this one stands out in terms of quality and durability. The attention to detail is impressive and it's clear that a lot of thought went into the design.",
  },
  {
    id: 3,
    name: "David Thompson",
    image: "/assets/user-1.jpg",
    rating: 4,
    text: "Very satisfied with my purchase. The product is intuitive to use and has made a significant difference in my daily routine. The only reason for 4 stars instead of 5 is that I wish it came in more color options.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "/assets/user-1.jpg",
    rating: 5,
    text: "Absolutely love this product! Customer service was exceptional when I had questions. Would definitely recommend to friends and family.",
  },
  {
    id: 5,
    name: "James Wilson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    rating: 4,
    text: "Solid product that delivers on its promises. Setup was straightforward and the performance has been consistent. Very happy with my purchase.",
  },
];

export default function ClientReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevious = () => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 300);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = [...testimonials.slice(start, end)];

    // If we don't have enough items to fill the page, wrap around
    if (visibleItems.length < itemsPerPage) {
      const remaining = itemsPerPage - visibleItems.length;
      visibleItems.push(...testimonials.slice(0, remaining));
    }

    return visibleItems;
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our Customers Say
            </h2>
            <p className="text-gray-500">
              Don&apos;t just take our word for it - hear from our satisfied
              customers
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              aria-label="Previous testimonials"
              className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <div className="h-px bg-gray-300 flex-grow-0 w-12"></div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out ${
                isAnimating && slideDirection === "right"
                  ? "translate-x-[-5%] opacity-0"
                  : ""
              } ${
                isAnimating && slideDirection === "left"
                  ? "translate-x-[5%] opacity-0"
                  : ""
              }`}
            >
              {getVisibleTestimonials().map((testimonial) => (
                <div key={testimonial.id} className="p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.rating} />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "currentColor" : "currentColor"}
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={filled ? 0 : 1.5}
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
