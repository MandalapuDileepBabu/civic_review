import React from "react";

interface ProfileProps {
  username: string;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
  // In a real app, user details and profile management would be fetched from backend or Firebase
  return (
    <main
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>User Profile</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> (This could show user email if fetched from Firebase)
      </p>
      <p>More user details and profile controls to be implemented here.</p>
    </main>
  );
};

export default Profile;
