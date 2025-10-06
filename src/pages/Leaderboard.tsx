import React from "react";

interface LeaderboardEntry {
  username: string;
  score: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { username: "Alice", score: 1500 },
  { username: "Bob", score: 1250 },
  { username: "Charlie", score: 1000 },
  { username: "David", score: 900 },
  { username: "Eve", score: 800 },
];

const Leaderboard: React.FC = () => {
  return (
    <main
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Leaderboard</h2>
      <p>Top contributors recognized for their community efforts.</p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 20,
        }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #29b430" }}>
            <th style={{ textAlign: "left", padding: "8px" }}>Rank</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Username</th>
            <th style={{ textAlign: "right", padding: "8px" }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr
              key={entry.username}
              style={{
                backgroundColor: index % 2 === 0 ? "#e6f4e6" : "transparent",
              }}
            >
              <td style={{ padding: "8px" }}>{index + 1}</td>
              <td style={{ padding: "8px" }}>{entry.username}</td>
              <td style={{ padding: "8px", textAlign: "right" }}>
                {entry.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Leaderboard;
