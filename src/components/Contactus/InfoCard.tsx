"use client";
import { MapPin, Mail, Phone, Clock } from "react-feather";

const iconMap = {
  location: MapPin,
  email: Mail,
  phone: Phone,
  clock: Clock,
};

const InfoCard = ({ type, title, description }) => {
  const Icon = iconMap[type] || "";

  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-sm text-center group hover:shadow-lg transition-shadow duration-300">
      <div className="relative mb-4 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]">
          <Icon className="w-10 h-10 text-brand" />
        </div>
      </div>
      <h3 className="text-16 font-medium mb-2 text-white">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};

export default InfoCard;
