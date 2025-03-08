"use client";

import { AnalyticsCardProps } from "@/types/dashboard";
import { analyticsCardData } from "@/utils/data";
import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Card: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  change,
  changeInfo,
  icon,
  action,
}) => {
  return (
    <div className="flex justify-between border-gray2 border rounded-[1rem] bg-white p-4 ">
      <div className="flex flex-col w-full">
        <Image
          src={icon}
          width={150}
          height={150}
          style={{ width: "2rem", marginBottom: "0.8rem" }}
          alt="logo"
        />
        <span className="mb-4 font-medium text-gray-600">{title}</span>
        <div className="flex justify-between items-center w-full">
          <span className="text-4xl font-bold text-gray5">{value}</span>
          <div className="flex gap-3 items-center">
            {action === "attention" ? (
              <span className="flex items-center gap-3">
                <Info className="text-[#E78020]" size={16} />
                <p className="text-[#E78020]">Requires attention</p>
              </span>
            ) : (
              <>
                <div className="mt-1 flex items-center space-x-1 bg-green1 rounded-[.4rem] px-2 py-1">
                  <GoArrowUpRight className="text-green2 h-5 w-5 font-semibold mt-1" />
                  <span className="text-md font-medium text-green2">
                    {change}
                  </span>
                </div>
                <span className="text-md text-gray-400">{changeInfo}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      {analyticsCardData.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          value={item.value}
          change={item.change}
          changeInfo={item.changeInfo}
          icon={item.icon}
          action={item.action}
        />
      ))}
    </div>
  );
};

export default AnalyticsCard;
