// import state and ref hooks, and the GoldenEgg component
import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneBean({ scrollY, onEggClick }) {
  // debug log to verify onEggClick function is passed correctly
  console.log("SceneBean onEggClick:", onEggClick);

  // vertical position where this scene begins
  const baseY = 6000;

  // relative scroll offset used for parallax effect
  const offsetY = scrollY - baseY;

  return (
    // container for the scene positioned absolutely at baseY
    <div className="scene-bean" style={{ top: `${baseY}px` }}>

      {/* clickable golden egg that increments counter on click */}
      <GoldenEgg 
        style={{ left: "30%", bottom: "10%" }} 
        onClick={onEggClick} 
      />

      {/* background layers with different scroll speeds for parallax depth */}
      <img
        src="/images/bg1.png"
        className="mountains2"
        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
      />
      <img
        src="/images/forest2.png"
        className="mountains3"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />
      <img
        src="/images/forest1.png"
        className="mountains4"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />

      {/* beanstalk image also moves slightly with scroll */}
      <img
        src="/images/beantalk.png"
        className="beanstalk"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />

      {/* foreground grass and overlay text description */}
      <div className="black-grass-container">
        <img src="/images/black-grass.png" className="grass2" />
        <div className="black-grass-text">
          As the moonlight touched the magic beans, the earth trembled...
          A mighty beanstalk burst from the ground, twisting high into the sky.
        </div>
      </div>
    </div>
  );
}

export default SceneBean;
