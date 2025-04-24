"use client";

import { useEffect, useState } from "react";
import { ArrowDown, PhoneCall } from "react-feather";
import AppButton from "@/helpers/ui/AppButton";
import Link from "next/link";

const backgroundImages = [
  "https://www.adcb.com/en/Images/50_102_155_POSMachines_2470x1190_tcm41-169746.png",
  "https://i.ytimg.com/vi/FM1wWI0fRgo/maxresdefault.jpg",
  "https://images.samsung.com/is/image/samsung/assets/us/business/solutions/industries/retail/barcode-scanning-solutions/HD01_PC.png?imwidth=1366",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    console.log("object");
    const section = document.getElementById("abayas");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            transform: currentImageIndex === index ? "scale(1.1)" : "scale(1)",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <p
          className="text-16 mb-4 hidden font-semibold md:block uppercase"
          style={{ fontFamily: "Tenor Sans" }}
        >
          WELCOME TO <span className="text-brand">rapid</span>
        </p>
        <h1
          className="text-5xl md:text-7xl font-serif max-w-5xl mb-6"
          data-aos="fade-up"
          style={{ fontFamily: "Tenor Sans" }}
        >
          Effective easy to use{" "}
          <span className="text-brand">solutions for your</span> business needs
        </h1>
        <p className="text-xl mb-8" data-aos="fade-up">
          Our new collections
        </p>
        <div role="button" tabIndex={0} onClick={() => handleScroll()}>
          <AppButton
            title="BROWSE PRODUCTS"
            link="/products"
            showIcon
            btnIcon={ArrowDown}
            iconClsname="animate-float-item-one"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-start justify-start gap-4 p-4">
        <div className="flex flex-col items-start justify-start gap-2">
          <PhoneCall className="w-10 h-10 text-white font-medium" />
          <Link
            href="tel:+971562015468"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-bold text-[1.2rem] tracking-wider"
          >
            971562015468
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
