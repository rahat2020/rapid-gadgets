"use client";
import React from "react";

const CommonTitle = ({ title = "" }) => {
  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="flex items-center w-full">
        <div className="h-px bg-gray-300 flex-grow"></div>
        <h1
          className="px-4 text-2xl md:text-3xl font-light tracking-wider text-brand uppercase"
          style={{ fontFamily: "Tenor Sans" }}
        >
          {title}
        </h1>
        <div className="h-px bg-gray-300 flex-grow"></div>
      </div>
    </div>
  );
};

export default CommonTitle;
