import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneHouse({ scrollY, onEggClick }) {
  const baseY = 12000;
  const offsetY = scrollY - baseY;

  return (
    <div className="scene-house" style={{ top: `${baseY}px` }}>
      <GoldenEgg 
        style={{ left: "60%", bottom: "42%" }} 
        onClick={onEggClick} 
      />

      <img
        src="./images/cloud2.png"
        className="cloud cloud-1"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="./images/cloud3.png"
        className="cloud cloud-2"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <img
        src="./images/cloud1.png"
        className="cloud cloud-3"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />

      <img
        src="./images/bg1.png"
        className="mountains1"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />

      <img
        src="./images/tree3.png"
        className="tree1 tree-left"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      />

      <div className="grass-container">
        <img src="./images/grass2.png" className="grass1" />
        <div className="grass-text">
          <p>
            Jack wandered into the village market, clutching the leash of the family's only cow.
            A mysterious stranger offered him something strange in return — five shimmering beans.
            Against all reason, Jack made the trade.
          </p>
          <p>
            Jack returned home proudly holding his magical beans.
            But his mother's face turned from confusion to rage.
            “You gave away our cow... for this?” she shouted, hurling the beans out the window.
          </p>
        </div>
      </div>

      <img src="./images/house1.png" className="house" />
    </div>
  );
}

export default SceneHouse;
