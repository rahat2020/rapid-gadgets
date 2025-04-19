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
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center group hover:shadow-lg transition-shadow duration-300">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4">
        <Icon className="w-10 h-10 text-brand" />
      </div>
      <h3 className="text-16 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default InfoCard;
