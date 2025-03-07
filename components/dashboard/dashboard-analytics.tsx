import AnalyticsCard from "./analytics-card";
import AnalyticsCharts from "./analytics-charts";

const DashboardAnalytics = () => {
  return (
    <div>
      <div className="flex gap-3 justify-between items-center">
        <h2 className="font-bold text-4xl mb-4">Analytics</h2>
        <hr className="w-full mb-2" />
      </div>
      <AnalyticsCard />
      <AnalyticsCharts />
    </div>
  );
};

export default DashboardAnalytics;
