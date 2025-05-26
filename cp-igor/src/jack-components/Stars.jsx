function Stars({ top = 2300 }) {
  const stars = Array.from({ length: 50 });

  return (
    <div
      className="stars-container"
      style={{
        position: "absolute",
        top: `${top}px`,
        width: "100%",
        height: "3000px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <img
        src="./images/moon.png"
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

      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 2 + 1;

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
              backgroundColor: "rgba(255, 255, 150, 0.6)",
              borderRadius: "50%",
              boxShadow: "0 0 2px rgba(255, 255, 200, 0.5)",
            }}
          />
        );
      })}
    </div>
  );
}

export default Stars;
