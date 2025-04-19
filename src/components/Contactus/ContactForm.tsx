"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guest: "",
    message: "",
    terms: false,
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">
        Get In <span className="text-brand">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <textarea
        placeholder="Write your message here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[150px]"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          Collaboratively formulate principle capital. Progressively evolve user
        </label>
      </div>

      <button
        role="button"
        tabIndex={0}
        type="submit"
        className="w-full bg-brand cursor-pointer hover:bg-bgLight text-white py-3 px-6 rounded-md transition duration-200 font-semibold"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
