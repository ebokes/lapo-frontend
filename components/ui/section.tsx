import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  other?: React.ReactNode;
}

const Section = ({ children, title, other }: SectionProps) => {
  return (
    <div className="border border-gray2 my-6 rounded-[0.8rem] bg-white1 p-5">
      <h2 className="font-medium mb-6">{title}</h2>
      <div>{other}</div>
      {children}
    </div>
  );
};

export default Section;
