"use client";
import React, { useState } from "react";
import InfoCard from "../Contactus/InfoCard";
import { contactInfoData } from "@/data/contactInfoData";
import { Minus, Plus } from "react-feather";
import Image from "next/image";
import { faqItems } from "@/data/faqItems";
import CommonHeader from "../common/CommonHeader";
import CommonTitle from "@/helpers/ui/CommonTitle";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <CommonHeader
        title="Get"
        secondarySubTitle="Your"
        subtitle="Answers"
        componentTitle="FAQ's"
      />

      {/* Info Cards */}
      <div className="max-w-8xl md:px-12 lg:px-12 px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfoData?.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>

      {/* FAQ Content Section */}
      <div className="w-full  px-4 py-16">
        <div className="container mx-auto">
          <CommonTitle title="FREQUENTLY ASKING QUESTION" />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Burger Image */}
            <div className="flex justify-center">
              <Image
                src="/assets/contact_page_imgwebp.webp"
                alt="burger"
                width={500}
                height={500}
                loading="lazy"
                className="object-contain animate-float-item-one"
              />
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden border border-gray-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full bg-brand text-white p-4 flex justify-between items-center transition-all duration-300"
                    >
                      <span className="text-left">{item.question}</span>
                      {isOpen ? (
                        <Minus className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 flex-shrink-0" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-[500px] opacity-100 p-4 bg-white"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
