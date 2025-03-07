import Image from "next/image";
import React from "react";
import manage from "@/assets/dashboard-icons/manage.svg";
import instant from "@/assets/dashboard-icons/instant.svg";
import personalized from "@/assets/dashboard-icons/personalized.svg";
import review from "@/assets/dashboard-icons/review.svg";
import { ChevronRight } from "lucide-react";

interface QuickAccessCardProps {
  icon: any;
  label: string;
}

const AccessCardData = [
  {
    icon: manage,
    label: "Manage a Card",
  },
  {
    icon: instant,
    label: "Issue Instant Card",
  },
  {
    icon: personalized,
    label: "Issue Personalized Card",
  },
  {
    icon: review,
    label: "Review Card Requests",
  },
];

const QuickAccessCard = ({ icon, label }: QuickAccessCardProps) => {
  return (
    <div className="bg-gray4 w-full flex px-7 gap-5 items-center rounded-[1rem] py-3 ">
      <Image
        src={icon}
        width={150}
        height={150}
        alt="logo"
        style={{ width: "3.5rem" }}
      />
      <div className="flex gap-3 items-center">
        <p className="py-4">{label}</p>
        <ChevronRight className="text-gray3 h-8" />
      </div>
    </div>
  );
};

const QuickAccess = () => {
  return (
    <div className="bg-white1 w-full rounded-[1rem] my-8 p-5 border-gray2 border">
      <p className="py-2">Your Quick Access</p>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {AccessCardData.map((item) => (
          <QuickAccessCard
            key={item.label}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
