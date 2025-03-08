"use client";

import {
  BarChart,
  Bar,
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
        <p className="text-gray-800 font-semibold">
          {payload[0].payload.month}
        </p>
        <p className="text-blue-700">Personalized: {payload[0].value}</p>
        <p className="text-blue-300">Instant: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const MonthlyIssuanceChart = ({ data }: any) => {
  return (
    <div className="bg-white rounded-2xl border overflow-auto">
      <div className="p-6 ">
        <h2 className="text-3xl font-medium text-gray-800 mb-6">
          Monthly Issuance
        </h2>
        <div className=" overflow-auto">
          <div className="min-w-[60rem]">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} barSize={30}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
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
                  cursor={{ fill: "#f5f5f5" }}
                />
                <Bar
                  dataKey="instant"
                  stackId="a"
                  fill="#1E40AF"
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="personalized"
                  stackId="a"
                  fill="#BFDBFE"
                  style={{ paddingBottom: "-5rem" }}
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-6">
        <div className="flex justify-center mt-4 space-x-4 text-[#808080]">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-900 rounded-full mr-2"></span>{" "}
            Personalized
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-300 rounded-full mr-2"></span>{" "}
            Instant
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyIssuanceChart;
