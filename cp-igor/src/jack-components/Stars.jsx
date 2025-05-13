function Stars({ top = 2300 }) {
  // create an array of 50 undefined elements for rendering stars
  const stars = Array.from({ length: 50 });

  return (
    // main container for stars and moon, positioned absolutely at given scroll height
    <div
      className="stars-container"
      style={{
        position: "absolute",
        top: `${top}px`,         // vertical starting position of star field
        width: "100%",           // full screen width
        height: "3000px",        // tall area to span multiple scenes
        pointerEvents: "none",   // allows interactions to pass through
        zIndex: 0,               // stays in the background
      }}
    >
      {/* moon image fixed in the top right of the scene */}
      <img
        src="/images/moon.png"
        alt="Moon"
        className="moon"
        style={{
          position: "absolute",
          top: "50%",
          right: "80px",
          width: "500px",
          opacity: 0.8,
        }}
      />

      {/* generate 50 random stars with random position and size */}
      {stars.map((_, i) => {
        const left = Math.random() * 100; // percentage from left
        const top = Math.random() * 100;  // percentage from top
        const size = Math.random() * 2 + 1; // 1–3px size

        return (
          <div
            key={i}
            className="star"
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: "rgba(255, 255, 150, 0.6)", // soft yellow glow
              borderRadius: "50%",
              boxShadow: "0 0 2px rgba(255, 255, 200, 0.5)", // glowing effect
            }}
          />
        );
      })}
    </div>
  );
}

export default Stars;
