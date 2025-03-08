import {
  monthlyAnalyticsData,
  recentCardRequestsData,
  weeklyAnalyticsData,
} from "@/utils/data";
import CardStatusDistribution from "./card-status-distribution";
import RecentCardRequestTable from "../tables/recent-card-request-table";
import MonthlyIssuance from "./monthly-issuance";
import ThisWeeksIncome from "./this-weeks-income";

const AnalyticsCharts = () => {
  return (
    <section className="grid grid-cols-1 mt-3 gap-4 md:grid-cols-2">
      <div className="space-y-3 h-full">
        <div>
          <MonthlyIssuance data={monthlyAnalyticsData} />
        </div>
        <div>
          <ThisWeeksIncome data={weeklyAnalyticsData} />
        </div>
      </div>
      <div className="space-y-3 h-full">
        <div>
          <RecentCardRequestTable tableData={recentCardRequestsData} />
        </div>
        <div>
          <CardStatusDistribution />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsCharts;
