import CommonTitle from "@/helpers/ui/CommonTitle";
import type { FC } from "react";

interface FeatureItemProps {
  number: string;
  title: string;
  description: string[];
  isLast?: boolean;
}

const FeatureItem: FC<FeatureItemProps> = ({
  number,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-6 relative">
      <div className="text-teal-700 font-bold text-5xl md:text-6xl mb-2">
        {number}
      </div>
      <h3 className="font-semibold text-gray-800 uppercase mb-1">{title}</h3>
      {description.map((line, index) => (
        <p key={index} className="text-gray-600 text-sm uppercase">
          {line}
        </p>
      ))}

      {!isLast && (
        <div className="hidden md:block absolute right-0 top-1/2 h-16 w-px bg-gray-200 -translate-y-1/2"></div>
      )}
    </div>
  );
};

const Processing: FC = () => {
  const features = [
    {
      number: "01.",
      title: "FREE SHIPPING",
      description: ["FREE AND FAST SHIPPING", "ACROSS SAUDI ARABIA"],
    },
    {
      number: "02.",
      title: "PAYMENT METHOD",
      description: ["CASH ON DELIVERY", "AVAILABLE, CREDIT CARD"],
    },
    {
      number: "03.",
      title: "EXCHANGE & RETURNS",
      description: ["IF IT DOESN'T FIT YOU WE CAN", "EXCHANGE OR REFUND."],
    },
  ];

  return (
    <section className="py-12 md:h-[60vh] h-[100vh] border-gray-200">
      <div className="container mx-auto">
        <CommonTitle title="WE MAKE IT EASY!" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processing;
