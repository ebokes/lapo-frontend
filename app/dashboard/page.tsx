import DashboardAnalytics from "@/components/dashboard/dashboard-analytics";
import Intro from "@/components/dashboard/dashboard-intro";
import QuickAccess from "@/components/dashboard/quick-access";
import { ZoomIn } from "../transition";

const Dashboard = () => {
  return (
    <ZoomIn>
      <Intro />
      <QuickAccess />
      <DashboardAnalytics />
    </ZoomIn>
  );
};

export default Dashboard;
