// import useState hook to track click state
import { useState } from "react";

function GoldenEgg({ style, onClick }) {
  // track if the egg has already been clicked
  const [clicked, setClicked] = useState(false);

  // handles egg click: triggers onClick prop and hides egg
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onClick();
    }
  };

  // if egg has been clicked, do not render it
  if (clicked) return null;

  // render the golden egg image with click handler and custom positioning
  return (
    <img
      src="/images/egg.png"
      className="golden-egg"
      style={style}
      onClick={handleClick}
      alt="Golden Egg"
    />
  );
}

export default GoldenEgg;
