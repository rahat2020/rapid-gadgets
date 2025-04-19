import AppButton from "@/helpers/ui/AppButton";
import Image from "next/image";

export default function DesignerSpotlight() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="flex flex-col md:flex-row">
        {/* Left section with text content */}
        <div className="bg-black text-white w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">
            Designer Spotlight: SUHAKSA
          </h1>
          <p className="text-base md:text-lg mb-8">
            Modest fashion, designed locally with an Arab essence.
          </p>
          <AppButton title="EXPLORE" />
        </div>

        {/* Right section with image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[60vh] relative">
          <Image
            src="/assets/banner2.jpg"
            alt="PALACHE designer modest fashion"
            fill
            className="object-fit"
            priority
          />
        </div>
      </div>
    </div>
  );
}
