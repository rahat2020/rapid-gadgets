import type React from "react";
import { Truck, RefreshCw, DollarSign } from "react-feather";

interface FeatureCardProps {
  icon: React.ReactNode;
  text: string;
  bgColor?: string;
  textColor?: string;
}

const FeatureCard = ({
  icon,
  text,
  bgColor = "bg-white",
  textColor = "text-black",
}: FeatureCardProps) => {
  return (
    <div className={`flex items-center p-6 rounded-lg ${bgColor}`}>
      <div className={`mr-4 ${textColor}`}>{icon}</div>
      <div className={`text-[1rem] font-medium ${textColor}`}>{text}</div>
    </div>
  );
};

export default function FeatureBanner() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard
          icon={<Truck className="h-5 w-5 text-blue-500" />}
          text="Free Delivery on First Orders"
        />
        <FeatureCard
          icon={<RefreshCw className="h-5 w-5" />}
          text="Free Returns"
          bgColor="bg-blue-500"
          textColor="text-white"
        />
        <FeatureCard
          icon={<DollarSign className="h-5 w-5 text-blue-500" />}
          text="Cash on Delivery"
        />
      </div>
    </div>
  );
}
