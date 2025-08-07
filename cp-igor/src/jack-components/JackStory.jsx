import { useEffect, useState, useRef } from "react";
import SceneTrade from "../jack-components/SceneTrade";
import SceneHouse from "../jack-components/SceneHouse";
import SceneBean from "../jack-components/SceneBean";
import SceneCastle from "../jack-components/SceneCastle";
import SceneGiant from "../jack-components/SceneGiant";
import Stars from "../jack-components/Stars";
import TextClouds from "../jack-components/TextClouds";
import GoldenHeaven from "../jack-components/GoldenHeaven";

function JackStory() {
  const [scrollY, setScrollY] = useState(0);
  const [jackImage, setJackImage] = useState("./images/jack111.png");
  const [eggCount, setEggCount] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "auto" });
    }, 50);

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (y >= 13500 && y <= 14500) {
        setJackImage("./images/jack3.png");
      } else if (y >= 11500 && y <= 12500) {
        setJackImage("./images/jack2.png");
      } else if (y >= 9500 && y <= 10500) {
        setJackImage("./images/jack3.png");
      } else if (y >= 6000 && y <= 9500) {
        setJackImage("./images/jack2.png");
      } else if (y >= 5000 && y <= 6000) {
        setJackImage("./images/jack111.png");
      } else if (y >= 2000 && y <= 3000) {
        setJackImage("./images/jack3.png");
      } else if (y >= 0 && y <= 2000) {
        setJackImage("./images/jack2.png");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);
    return () => window.removeEventListener("click", startAudio);
  }, []);

  const handleEggClick = () => {
    setEggCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        console.log("🎉 Easter Egg unlocked!");
      }
      return newCount;
    });
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="jack-story-container">
      <div className="gradient-background" style={{ height: "2000vh" }}>
        <h1 className="jack-title">Jack and the Beanstalk</h1>
        <SceneTrade scrollY={scrollY} onEggClick={handleEggClick} />
        <SceneHouse scrollY={scrollY} onEggClick={handleEggClick} />
        <Stars top={0} />
        <SceneBean scrollY={scrollY} onEggClick={handleEggClick} />
        <SceneCastle scrollY={scrollY} onEggClick={handleEggClick} />
        <SceneGiant scrollY={scrollY} onEggClick={handleEggClick} />
        <GoldenHeaven scrollY={scrollY} show={eggCount === 5 && scrollY <= 1000} />
      </div>

      <TextClouds scrollY={scrollY} />

      <img src={jackImage} alt="Jack" className="jack" />

      <div className="egg-counter">🥚 {eggCount} / 5</div>

      <audio ref={audioRef} src="./sounds/bgm1.mp3" loop />

      <button
        onClick={toggleMute}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 100,
          padding: "8px 12px",
          fontSize: "14px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#fff",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
}

export default JackStory;
