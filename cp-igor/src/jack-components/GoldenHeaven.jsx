// import react hooks (not used in this version but imported in case of future state/side effects)
import { useEffect, useState } from "react";

function GoldenHeaven({ scrollY, show }) {
  // hide the component if not in view or if the scroll is past 1000px
  if (!show || scrollY > 1000) return null;

  // render a fullscreen fixed container with golden visuals and floating eggs
  return (
    <div
      className="golden-heaven"
      style={{
        position: "fixed", // always stays on screen
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to top, #fffbe6, #ffe066)", // gold-themed gradient
        zIndex: 999, // top layer
        display: "flex", // center contents
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 1s ease-out", // smooth entry
      }}
    >
      {/* title text */}
      <h1 style={{ color: "#cfa300", fontSize: "2rem", marginBottom: "20px" }}>
        🌟 Welcome to Golden Heaven 🌟
      </h1>

      {/* golden jack image */}
      <img src="/images/jack111.png" style={{ width: "150px", marginBottom: "20px" }} />

      {/* golden hen image */}
      <img src="/images/hen.png" style={{ width: "120px" }} />

      {/* floating golden eggs */}
      <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/images/egg.png"
            style={{
              width: "40px",
              animation: `float ${2 + i % 2}s ease-in-out infinite`, // slight variation in float timing
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default GoldenHeaven;
