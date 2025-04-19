"use client";
import Link from "next/link";
import WhatsappIcon from "@/helpers/ui/customSvg/WhatsappIcon";

const GotoWhatspp = () => {
  return (
    <Link
      href={"https://web.whatsapp.com/send?phone=0541532030&text="}
      target="_blank"
      className="flex items-center justify-center fixed bottom-3 right-5 px-4 z-30 text-white rounded-full transition duration-300"
    >
      <WhatsappIcon />
    </Link>
  );
};

export default GotoWhatspp;
