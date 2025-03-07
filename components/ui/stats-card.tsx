import React from "react";

interface StatsCardProps {
  bg: string;
  icon: React.ReactNode;
  title: string;
  value: number;
}

const StatsCard = ({ bg, icon, title, value }: StatsCardProps) => {
  return (
    <div className="bg-white p-9 flex items-center gap-9 rounded-[2rem] border">
      <div className={`${bg} p-6 rounded-xl grid place-items-center`}>
        {icon}
      </div>
      <div className="text-gray-500">
        <h3 className="text-2xl">{title}</h3>
        <h2 className="font-bold text-4xl mt-5">{value}</h2>
      </div>
    </div>
  );
};

export default StatsCard;
