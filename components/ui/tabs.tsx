import { cn } from "@/lib/utils";
import React from "react";

interface TabsProps {
  data: any;
  selectedTab: string;
  setSelectedTab: any;
}

const Tabs = ({ data, selectedTab, setSelectedTab }: TabsProps) => {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden w-full md:w-fit border-[1px]">
      {data.map((tab: any) => (
        <button
          key={tab.key}
          className={cn(
            "py-3 px-8 text-center flex gap-2 items-center border-r justify-center",
            selectedTab === tab.key
              ? "bg-[#f2f1f1] font-medium"
              : "font-extralight"
          )}
          onClick={() => setSelectedTab(tab.key)}
        >
          <p className="pb-1">{tab.label}</p>
          {tab.count && <p>({tab.count})</p>}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
