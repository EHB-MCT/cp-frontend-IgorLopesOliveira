import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneGiant({ scrollY, onEggClick }) {
  const baseY = 2500;
  const offsetY = scrollY - baseY;

  return (
    <div className="scene-giant" style={{ top: `${baseY}px` }}>
      <GoldenEgg 
        style={{ left: "26%", bottom: "89%" }} 
        onClick={onEggClick} 
      />

      <div className="wall-scene-container">
        <img
          src="./images/wall.png"
          className="wall"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        />
        <div className="wall-text">
          <p>
            Jack stepped inside the towering castle. There he saw the sleeping giant, the golden hen, and the magical harp resting beside a pile of shining golden eggs.
          </p>
          <p>
            Quietly, he snatched them and raced back down the beanstalk.
          </p>
        </div>
      </div>

      <img src="./images/giant.png" className="giant" />
      <img src="./images/hen.png" className="hen" />
      <img src="./images/harp.png" className="harp" />

      <img
        src="./images/cloud3.png"
        className="cloud-1"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="./images/cloud1.png"
        className="cloud-2"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="./images/cloud2.png"
        className="cloud-3"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
    </div>
  );
}

export default SceneGiant;
