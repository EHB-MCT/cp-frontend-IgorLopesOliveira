// import animation hook from react-spring and useState from react
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

function Jack() {
  // currently no animation or state is used, just returning a styled animated element

  return (
    // animated wrapper for future animations or transitions
    <animated.div className="jack">
      {/* inner div to apply jack's texture or image through css */}
      <div className="jack-texture"></div>
    </animated.div>
  );
}

export default Jack;
