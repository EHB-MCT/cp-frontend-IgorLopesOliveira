// import react hooks and the golden egg component
import { useState, useRef } from "react";
import GoldenEgg from "../jack-components/GoldenEgg";

function SceneTrade({ scrollY, onEggClick }) {
  // vertical position where this scene starts
  const baseY = 14000;

  // relative scroll offset used for parallax effect
  const offsetY = scrollY - baseY;

  // track whether the bean has been traded for the cow
  const [tradeDone, setTradeDone] = useState(false);

  // track visibility of the bean after the trade
  const [beanVisible, setBeanVisible] = useState(true);

  // handle the bean click to start the trade animation
  const handleTrade = () => {
    if (tradeDone) return;

    setTradeDone(true);

    // hide the bean after animation duration
    setTimeout(() => {
      setBeanVisible(false);
    }, 1500);
  };

  return (
    // main container positioned at the correct scroll height
    <div className="scene-trade" style={{ top: `${baseY}px` }}>

      {/* hidden golden egg in the scene */}
      <GoldenEgg style={{ left: "80%", bottom: "20%" }} onClick={onEggClick} />

      {/* background clouds with different parallax speeds */}
      <img
        src="/images/cloud1.png"
        className="cloud cloud-1"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <img
        src="/images/cloud2.png"
        className="cloud cloud-2"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <img
        src="/images/cloud3.png"
        className="cloud cloud-3"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />

      {/* mountain background with slow scroll movement */}
      <img
        src="/images/bg1.png"
        className="mountains"
        style={{ transform: `translateY(${offsetY * 0.25}px)` }}
      />

      {/* trees with faster parallax */}
      <img
        src="/images/tree1.png"
        className="tree tree-left"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      />
      <img
        src="/images/tree2.png"
        className="tree tree-right"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      />

      {/* grass layer in foreground */}
      <img src="/images/grass1.png" className="grass" />

      {/* market and cow in the scene */}
      <img src="/images/market1.png" className="market" />
      <img
        src="/images/cow1.png"
        className={`cow ${tradeDone ? "move-to-market" : ""}`} // animate cow after trade
      />

      {/* bean that moves and fades out when clicked */}
      {beanVisible && (
        <img
          src="/images/bean1.png"
          className={`bean ${tradeDone ? "move-to-jack fade-out" : ""}`}
          onClick={handleTrade}
        />
      )}
    </div>
  );
}

export default SceneTrade;
