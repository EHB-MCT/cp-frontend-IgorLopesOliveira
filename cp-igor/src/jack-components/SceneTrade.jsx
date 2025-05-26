import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneTrade({ scrollY, onEggClick }) {
  const baseY = 14000;
  const offsetY = scrollY - baseY;

  const [tradeDone, setTradeDone] = useState(false);
  const [beanVisible, setBeanVisible] = useState(true);

  const handleTrade = () => {
    if (tradeDone) return;
    setTradeDone(true);
    setTimeout(() => {
      setBeanVisible(false);
    }, 1500);
  };

  return (
    <div className="scene-trade" style={{ top: `${baseY}px` }}>
      <GoldenEgg style={{ left: "80%", bottom: "20%" }} onClick={onEggClick} />

      <img
        src="./images/cloud1.png"
        className="cloud cloud-1"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="./images/cloud2.png"
        className="cloud cloud-2"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <img
        src="./images/cloud3.png"
        className="cloud cloud-3"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />

      <img
        src="./images/bg1.png"
        className="mountains"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />

      <img
        src="./images/tree1.png"
        className="tree tree-left"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      />
      <img
        src="./images/tree2.png"
        className="tree tree-right"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      />

      <img src="./images/grass1.png" className="grass" />

      <img src="./images/market1.png" className="market" />
      <img
        src="./images/cow1.png"
        className={`cow ${tradeDone ? "move-to-market" : ""}`}
      />

      {beanVisible && (
        <img
          src="./images/bean1.png"
          className={`bean ${tradeDone ? "move-to-jack fade-out" : ""}`}
          onClick={handleTrade}
        />
      )}
    </div>
  );
}

export default SceneTrade;
