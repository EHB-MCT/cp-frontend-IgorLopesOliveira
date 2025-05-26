import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneBean({ scrollY, onEggClick }) {
  console.log("SceneBean onEggClick:", onEggClick);

  const baseY = 6000;
  const offsetY = scrollY - baseY;

  return (
    <div className="scene-bean" style={{ top: `${baseY}px` }}>
      <GoldenEgg 
        style={{ left: "30%", bottom: "10%" }} 
        onClick={onEggClick} 
      />

      <img
        src="./images/bg1.png"
        className="mountains2"
        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
      />
      <img
        src="./images/forest2.png"
        className="mountains3"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />
      <img
        src="./images/forest1.png"
        className="mountains4"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <img
        src="./images/beantalk.png"
        className="beanstalk"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />

      <div className="black-grass-container">
        <img src="./images/black-grass.png" className="grass2" />
        <div className="black-grass-text">
          As the moonlight touched the magic beans, the earth trembled...
          A mighty beanstalk burst from the ground, twisting high into the sky.
        </div>
      </div>
    </div>
  );
}

export default SceneBean;
