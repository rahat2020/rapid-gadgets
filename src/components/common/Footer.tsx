"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/data/navData";
import { footerSocialLinks, policiesData } from "@/data";

const Footer = () => {
  // states
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <footer className="bg-brand-secondary text-white relative ">
      {/* Main Footer */}
      <div className="w-full mx-auto container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Image
              src="/assets/logo.png"
              alt="Fodis Logo"
              width={150}
              height={50}
              className="h-12 mb-6 object-contain"
            />
            <p className="text-gray-400 mb-6">
              Phasellus ultricies aliquam volutpat elementum per lacinia tempus,
              a blandit condimentum tacitus mollis.
            </p>
            <div className="flex gap-4">
              {footerSocialLinks?.map(({ link, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={link}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-700 hover:bg-[#28ace2] hover:border-[#28ace2] hover:text-white transition-all duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navData?.slice(1, 7)?.map((item) => (
                <li key={item?.label}>
                  <Link
                    href={item?.link}
                    className="text-gray-400 hover:text-[#28ace2] transition-colors"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Policies</h3>
            <ul className="space-y-3">
              {policiesData.map((item) => (
                <li key={item.id}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#28ace2] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="text-gray-400">
                <div>Sat - Thu: 10PM – 12AM</div>
                <div>Friday: 3PM – 12AM</div>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-[#ff6b2c]"
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy" className="mt-1.5" />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  I agree with the Privacy Policy
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="w-full container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-400 text-sm">
                Developed by:{" "}
                <Link
                  href="https://rapidsmarterp.com/"
                  className="hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapid
                </Link>
              </p>
            </div>
            <div className="text-gray-400 text-sm text-center">
              Copyright © 2025 Rapid All Rights Reserved.
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#28ace2] transition-colors"
              >
                Terms & Condition
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#28ace2] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
