"use client";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Active", value: 1800, color: "#519CA7" },
  { name: "Expired", value: 400, color: "#FFC53D" },
  { name: "Inactive", value: 100, color: "#174EA6" },
  { name: "Blocked", value: 80, color: "#8020E7" },
  { name: "Lost", value: 70, color: "#E53950" },
];

const totalCards = data.reduce((acc, item) => acc + item.value, 0);

const CardStatusDistribution = () => {
  return (
    <div className="bg-white rounded-2xl border p-6 flex flex-col items-center">
      <h2 className="text-3xl font-medium text-gray-800 mb-4 self-start">
        Card Status Distribution
      </h2>
      <div className=" overflow-auto">
        <div className="relative flex justify-center items-center min-w-[60rem]">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={90}
              stroke="none"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              paddingAngle={1}
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute flex flex-col items-center">
            <p className="text-gray-500 text-[1.4rem]">Total Cards</p>
            <p className="text-4xl font-medium text-gray-900">
              {totalCards.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-1 space-x-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-600">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardStatusDistribution;
