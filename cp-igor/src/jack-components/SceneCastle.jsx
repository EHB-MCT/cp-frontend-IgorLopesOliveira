// import react hooks and the GoldenEgg component
import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneCastle({ scrollY, onEggClick }) {
  // defines where this scene starts vertically
  const baseY = 5000;

  // calculates how far the user has scrolled past the baseY
  const offsetY = scrollY - baseY;

  return (
    // positions this scene absolutely on the page based on baseY
    <div className="scene-castle" style={{ top: `${baseY}px` }}>

      {/* golden egg hidden in the scene, clickable */}
      <GoldenEgg 
        style={{ left: "60%", bottom: "89%" }} 
        onClick={onEggClick} 
      />

      {/* large cloud at the top with a floating description */}
      <div className="cloud-top-container">
        <img src="/images/big-cloud.png" className="cloud1" />
        <div className="cloud-text">
          Above the clouds, a hidden world awaited... 
          A grand castle loomed in the sky, home to untold treasures—and danger.
        </div>
      </div>

      {/* main castle image */}
      <img src="/images/castle.png" className="castle" />

      {/* smaller clouds moving slightly with scroll for parallax effect */}
      <img
        src="/images/cloud3.png"
        className="cloud-1"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="/images/cloud1.png"
        className="cloud-2"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="/images/cloud2.png"
        className="cloud-3"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />

      {/* decorative floating eggs in the castle scene */}
      <img src="/images/egg.png" className="egg" />
      <img src="/images/egg.png" className="egg1" />
      <img src="/images/egg.png" className="egg2" />
      <img src="/images/egg.png" className="egg3" />
    </div>
  );
}

export default SceneCastle;
