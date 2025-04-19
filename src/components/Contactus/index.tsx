"use client";
import Image from "next/image";
import CommonHeader from "../common/CommonHeader";
import InfoCard from "./InfoCard";
import ContactForm from "./ContactForm";
import { contactInfoData } from "@/data/contactInfoData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUsComponent = () => {
  // ANIMATE ON SCROLL
  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-white">
      <CommonHeader title="Contact" subtitle="Us" componentTitle="Contact us" />
      {/* Info Cards */}
      <div
        className="max-w-8xl md:px-12 lg:px-12 px-4 py-16"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfoData?.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16" data-aos="fade-up">
        <div className="max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/assets/contact_page_imgwebp.webp"
                alt="contact"
                width={500}
                height={600}
                quality={100}
                priority={true}
                className="w-[100%] h-[60vh] object-contain rounded-lg animate-float-item-one"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full py-12" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.6528955327285!2d55.31360027415651!3d25.269837928756946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cca825f0e93%3A0x9f8f0552559eb793!2sFish%20Roundabout%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1745063824642!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsComponent;
