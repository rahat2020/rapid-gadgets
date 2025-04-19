"use client";

import type React from "react";
import Link from "next/link";

import { useState } from "react";
import { Send, User } from "react-feather";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      // Replace with actual API call to your newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="w-full max-w-4xl mx-auto bg-brand text-white p-8 py-12 text-center ">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">
          GET OUR LATEST STYLE UPDATES
        </h2>

        <p className="mb-6 text-base">
          Be the first to know about new arrivals, sales & promos by submitting
          your email! You can opt out at any time.{" "}
          <Link href="#" className="underline hover:text-gray-300">
            Privacy Policy
          </Link>
        </p>

        {isSuccess ? (
          <div className="text-green-400 py-4">
            Thanks for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center"
          >
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full py-3 pl-10 pr-3 bg-gray-100 text-black placeholder-gray-800 rounded-l-md focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white cursor-pointer rounded-full p-3 ml-2 text-black hover:bg-gray-200 transition-colors"
            >
              <Send className="h-5 w-5 text-gray-500" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
