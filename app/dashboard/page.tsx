import DashboardAnalytics from "@/components/dashboard/dashboard-analytics";
import Intro from "@/components/dashboard/dashboard-intro";
import QuickAccess from "@/components/dashboard/quick-access";

const Dashboard = () => {
  return (
    <div>
      <Intro />
      <QuickAccess />
      <DashboardAnalytics />
    </div>
  );
};

export default Dashboard;
