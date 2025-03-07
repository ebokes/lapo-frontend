import React from "react";
import { IconType } from "react-icons";
import {
  FiCreditCard,
  FiShoppingBag,
  FiActivity,
  FiAlertCircle,
} from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

interface CardProps {
  title: string;
  value: string | number;
  change?: string;
  changeInfo?: string;
  icon?: IconType;
  iconColor?: string;
  iconBg?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  change,
  changeInfo,
  icon: Icon,
  iconColor = "text-green-500",
  iconBg = "bg-green-100",
}) => {
  return (
    <div className="flex justify-between border-gray2 border rounded-[1rem] bg-white p-4 ">
      <div className="flex flex-col w-full">
        {Icon && (
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
          >
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
        )}
        <span className="mb-1 font-medium text-gray-600">{title}</span>
        <div className="flex justify-between items-center w-full">
          <span className="text-4xl font-bold text-gray5">{value}</span>
          <div className="flex gap-3 items-center">
            {change && (
              <div className="mt-1 flex items-center space-x-1 bg-green1 rounded-[.4rem] px-2 py-1">
                <GoArrowUpRight className="text-green2 h-5 w-5 font-semibold mt-1" />
                <span className="text-md font-medium text-green2">
                  {change}
                </span>
              </div>
            )}
            {changeInfo && (
              <span className="text-md text-gray-400">{changeInfo}</span>
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
      <Card
        title="Total Active Cards"
        value="26,478"
        change="+9%"
        changeInfo="this month"
        icon={FiCreditCard}
        iconColor="text-green-500"
        iconBg="bg-green-100"
      />

      <Card
        title="Total Personalized Cards"
        value="15,703"
        change="+8.5%"
        changeInfo="this month"
        icon={FiShoppingBag}
        iconColor="text-blue-500"
        iconBg="bg-blue-100"
      />

      <Card
        title="Today's Revenue"
        value="₦9.3M"
        change="+6%"
        changeInfo="vs yesterday"
        icon={FiActivity}
        iconColor="text-purple-500"
        iconBg="bg-purple-100"
      />

      <Card
        title="Pending Requests"
        value="38"
        change="Requires attention"
        icon={FiAlertCircle}
        iconColor="text-orange-500"
        iconBg="bg-orange-100"
      />
    </div>
  );
};

export default AnalyticsCard;
