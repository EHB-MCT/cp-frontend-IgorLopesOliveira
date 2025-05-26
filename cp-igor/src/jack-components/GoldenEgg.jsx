import { useState } from "react";

function GoldenEgg({ style, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onClick();
    }
  };

  if (clicked) return null;

  return (
    <img
      src="./images/egg.png"
      className="golden-egg"
      style={style}
      onClick={handleClick}
      alt="Golden Egg"
    />
  );
}

export default GoldenEgg;
