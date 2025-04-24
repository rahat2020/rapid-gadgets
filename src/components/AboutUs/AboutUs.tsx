"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonHeader from "../common/CommonHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, Facebook, Instagram, Twitter, Youtube } from "react-feather";
import CommonTitle from "@/helpers/ui/CommonTitle";

const AboutUs = () => {
  // ANIMATE ON SCROLL
  useEffect(() => {
    AOS.init({ offset: 120, duration: 2000, easing: "ease-out" });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CommonHeader
        title="About"
        subtitle="Gadgets"
        secondarySubTitle="Rapid"
        componentTitle="About us"
      />
      {/* Our Story Section */}

      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="container mx-auto">
          <CommonTitle title="Our Story" />
          <div className="mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-white text-sm mb-4 py-1 rounded-md bg-brand w-full md:w-[30%] text-center uppercase font-medium">
                Some words about us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We Help Everyone Enjoy Amazing Products
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-md">
                If the copy becomes distracting in the design then you are doing
                something wrong or they are discussing copy changes. It might be
                a bit annoying but you could tell them that that discussion
                would be best suited.
              </p>
            </div>

            {/* Right Column - Image Grid */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {/* Top Row */}
                <div className="overflow-hidden flex justify-end items-end">
                  <Image
                    src="/assets/acs-ab-us.webp"
                    alt="Team photo"
                    width={300}
                    height={100}
                    className="w-full h-[200px] object-contain !rounded-xl animate-float-item-one"
                  />
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <p className="text-sm mb-4">
                    Websites in professional use templating systems. Commercial
                    publishing platforms and content management systems ensure
                    that you can show.
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src="/assets/acs-ab-us-img-2.jpg.webp"
                        alt="Brooklyn Simmons"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Brooklyn Simmons</p>
                      <p className="text-xs text-blue-100">BARONE LLC</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/assets/acs-ab-us-img-2.jpg.webp"
                    alt="Interior space"
                    width={300}
                    height={100}
                    className="w-full h-[300px] object-contain !rounded-xl"
                  />
                </div>
                <div className=" overflow-hidden">
                  <Image
                    src="/assets/acs-ab-us-img-3.jpg.webp"
                    alt="Product image"
                    width={300}
                    height={200}
                    className="w-full h-[300px] object-contain !rounded-xl animate-float-item-one"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-6">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-md bg-brand px-3 py-1 text-sm text-white font-medium uppercase">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                The Rapid Story
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From humble beginnings to industry leadership
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center p-2 justify-center rounded-full border border-white bg-brand text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="h-full w-px bg-emerald-200" />
              </div>
              <div className="space-y-2 pb-8">
                <h3 className="text-xl font-bold">2010: Founded</h3>
                <p className="text-gray-500">
                  Rapid was founded by a team of engineers who saw the need for
                  reliable electronic components with faster delivery times.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center p-2 justify-center rounded-full border border-white bg-brand text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="h-full w-px bg-emerald-200" />
              </div>
              <div className="space-y-2 pb-8">
                <h3 className="text-xl font-bold">2015: Expansion</h3>
                <p className="text-gray-500">
                  Opened our first international warehouse and expanded our
                  product line to include over 10,000 components.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center p-2 justify-center rounded-full border border-white bg-brand text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="h-full w-px bg-emerald-200" />
              </div>
              <div className="space-y-2 pb-8">
                <h3 className="text-xl font-bold">2018: Innovation</h3>
                <p className="text-gray-500">
                  Launched our custom component service, allowing clients to
                  request specialized parts for unique projects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center p-2 justify-center rounded-full border border-white bg-brand text-white">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Today: Industry Leader</h3>
                <p className="text-gray-500">
                  Now serving over 50,000 customers worldwide with 24-hour
                  shipping and an inventory of more than 100,000 parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/assets/contact_page_imgwebp.webp"
                alt="about us gadgets"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg animate-float-item-one"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <div className="max-w-2xl mx-auto px-4 py-12">
                <div className="mb-6">
                  <h3 className="text-white rounded-md text-sm font-medium px-2 md:w-[66%] bg-brand py-1 uppercase">
                    INNOVATIVE & RELIABLE Electronic Solutions
                  </h3>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  About Rapid
                </h1>

                <div className="text-gray-700 space-y-4 mb-8">
                  <p>
                    At <span className="text-brand font-medium">Rapid</span>, we
                    are more than just a brand. We are a symbol of innovation,
                    precision, and reliability. Our mission is to provide a
                    comprehensive range of electronic solutions including
                    barcode scanners, checkpoint systems, barcode printers, and
                    other essential gadgets designed to streamline business
                    operations across industries. With a strong commitment to
                    quality and performance, we offer cutting-edge products that
                    cater to the needs of retail, logistics, warehousing, and
                    more. Whether you are enhancing your POS setup or automating
                    your inventory process, Rapid ensures efficiency with every
                    device. Join us on a journey of smarter business management
                    and technological advancement as you explore our collection
                    of intelligent scanning and printing solutions. We are your
                    trusted partner in modernizing operations with devices built
                    to perform.
                  </p>
                </div>

                <div className="flex space-x-4 justify-center">
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-[#28ace2] text-brand hover:hover:bg-[#28ade254] hover:text-white transition-colors"
                  >
                    <Facebook size={18} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-[#28ace2] text-brand hover:hover:bg-[#28ade254] hover:text-white transition-colors"
                  >
                    <Instagram size={18} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-[#28ace2] text-brand hover:hover:bg-[#28ade254] hover:text-white transition-colors"
                  >
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-[#28ace2] text-brand hover:bg-[#28ade254] hover:text-white transition-colors"
                  >
                    <Youtube size={18} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
