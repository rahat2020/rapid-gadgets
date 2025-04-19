"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "react-feather";
import AppButton from "@/helpers/ui/AppButton";
import useMediaQuery from "@/hooks/useMediaQuery";

const backgroundImages = ["/assets/Hero-Banner.png"];

const Hero = () => {
  const isMobileScreen = useMediaQuery("(max-width: 768px)");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const handleScroll = () => {
  //   console.log("object");
  //   const section = document.getElementById("abayas");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

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
          className="text-16 mb-4 hidden font-semibold md:block"
          style={{ fontFamily: "Tenor Sans" }}
        >
          WELCOME TO <span className="text-brand">SUHAKSA</span>
        </p>
        <h1
          className="text-5xl md:text-7xl font-serif max-w-5xl mb-6"
          data-aos="fade-up"
          style={{ fontFamily: "Tenor Sans" }}
        >
          Get modest and modern abayas for every occasion.
        </h1>
        <p className="text-xl mb-8" data-aos="fade-up">
          Our new collections
        </p>
        {/* <div role="button" tabIndex={0} onClick={() => handleScroll()}> */}
        <AppButton
          title={isMobileScreen ? "ORDER NOW" : "BROWSE COLLECTION"}
          showIcon
          btnIcon={ArrowDown}
          iconClsname="animate-float-item-one"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
