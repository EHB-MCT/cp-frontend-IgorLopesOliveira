import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

function Jack() {
  return (
    <animated.div className="jack">
      <div className="jack-texture"></div>
    </animated.div>
  );
}

export default Jack;
