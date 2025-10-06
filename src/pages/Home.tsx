import React from "react";
import Hero from "../Components/Hero";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <section
        id="about"
        style={{
          maxWidth: 800,
          margin: "40px auto",
          padding: "0 20px",
          textAlign: "center",
          color: "#2a5e23",
          lineHeight: 1.5,
        }}
      >
        <h2>Welcome to Civic Review Portal</h2>
        <p>
          Civic Review Portal is your community platform to share reviews,
          report issues, and collaborate with fellow citizens to build safer,
          cleaner, and healthier neighborhoods.
        </p>
        <p>
          Join us and start making a lasting positive impact on your community
          today.
        </p>
      </section>
    </main>
  );
};

export default Home;
