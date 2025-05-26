import { useEffect, useState } from "react";

function GoldenHeaven({ scrollY, show }) {
  if (!show || scrollY > 1000) return null;

  return (
    <div
      className="golden-heaven"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to top, #fffbe6, #ffe066)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 1s ease-out",
      }}
    >
      <h1 style={{ color: "#cfa300", fontSize: "2rem", marginBottom: "20px" }}>
        🌟 Welcome to Golden Heaven 🌟
      </h1>

      <img src="./images/jack111.png" style={{ width: "150px", marginBottom: "20px" }} />
      <img src="./images/hen.png" style={{ width: "120px" }} />

      <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="./images/egg.png"
            style={{
              width: "40px",
              animation: `float ${2 + i % 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default GoldenHeaven;
