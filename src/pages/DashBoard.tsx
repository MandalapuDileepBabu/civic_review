import React from "react";

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Welcome, {username}!</h2>
      <p>
        This is your dashboard where you can access personalized features,
        view updates, and manage your account.
      </p>
      {/* Placeholder for dashboard widgets, statistics, or other content */}
      <section style={{ marginTop: "20px" }}>
        <h3>Recent Activities</h3>
        <p>No recent activity to display. Start engaging with your community!</p>
      </section>
    </main>
  );
};

export default Dashboard;
