import React from "react";
import { Link, Outlet } from "react-router";
import "./Dashbord.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <div className="logo">
          <h2>Admin Panel</h2>
        </div>

        <nav className="menu">
          <Link to="">🏠 Dashboard</Link>
          <Link to="profile">👤 Profile</Link>
          <Link to="setting">⚙️ Settings</Link>
          <Link to="/">🚪 Logout</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>

    </div>
  );
};

export default Dashboard;