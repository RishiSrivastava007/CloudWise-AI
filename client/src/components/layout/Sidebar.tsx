import { FaChartLine, FaCloud, FaRobot, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold text-blue-400">
        CloudWise AI
      </h1>

      <nav className="mt-10 space-y-5">

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaChartLine />
          Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaCloud />
          Resources
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaRobot />
          AI Insights
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaCog />
          Settings
        </div>

      </nav>

    </aside>
  );
}

export default Sidebar;