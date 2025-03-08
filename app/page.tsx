import DashboardAnalytics from "@/components/dashboard/dashboard-analytics";
import Intro from "@/components/dashboard/dashboard-intro";
import QuickAccess from "@/components/dashboard/quick-access";
// import Login from "./auth/login/page";

export default function Home() {
  return (
    <div>
      <Intro />
      <QuickAccess />
      <DashboardAnalytics />
    </div>
  );
}
