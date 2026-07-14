import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import StatCard from "../../components/dashboard/StatCard";
import SpendingChart from "../../components/dashboard/SpendingChart";
import RecommendationCard from "../../components/dashboard/RecommendationCard";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Cloud Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Monthly Cost" value="₹12,450" />
            <StatCard title="Savings" value="₹3,500" />
            <StatCard title="Resources" value="86" />
            <StatCard title="Alerts" value="5" />
          </div>

          <SpendingChart />

          <RecommendationCard />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;