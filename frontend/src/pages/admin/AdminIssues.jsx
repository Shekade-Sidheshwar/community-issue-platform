import React, { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardCard from "../../components/DashboardCard";

function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const res = await API.get("/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <DashboardCard title="Total Issues" value={stats.total_issues || 0} />
        <DashboardCard title="Resolved Issues" value={stats.resolved_issues || 0} />
        <DashboardCard title="Pending Issues" value={stats.pending_issues || 0} />
      </div>
    </div>
  );
}

export default AdminDashboard;
