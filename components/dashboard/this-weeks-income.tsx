"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-md">
        <p className="text-gray-800 font-semibold">{payload[0].payload.day}</p>
        <p className="text-green-600">Income: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const WeeklyIncomeChart = ({ data }: any) => {
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-md">
      <h2 className="text-3xl font-medium text-gray-800 mb-4">
        This Week’s Income
      </h2>
      <div className=" overflow-auto">
        <div className="min-w-[60rem]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6B7280" }}
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "#D1FAE5" }}
              />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#16A34A"
                strokeWidth={2}
                dot={false}
                style={{
                  filter: "drop-shadow(0px 6px 5px rgba(22, 163, 74, 0.4))",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeeklyIncomeChart;
