function TextClouds({ scrollY }) {
  // default text content and visibility
  let text = "";
  let visible = false;

  // set text content based on scroll position ranges
  if (scrollY >= 13500 && scrollY <= 14500) {
    text = (
      <>
        I'm going to trade the <br />
        cow for magic beans...
      </>
    );
    visible = true;
  } else if (scrollY >= 11500 && scrollY <= 12500) {
    text = (
      <>
        Finally home, what will <br />
        my mom say about this?
      </>
    );
    visible = true;
  } else if (scrollY >= 9500 && scrollY <= 10500) {
    text = (
      <>
        WOW! Those were really <br />
        magic beans!
      </>
    );
    visible = true;
  } else if (scrollY >= 5000 && scrollY <= 6000) {
    text = (
      <>
        Didn't know they had <br />
        castles in the sky!
      </>
    );
    visible = true;
  } else if (scrollY >= 2000 && scrollY <= 3000) {
    text = (
      <>
        A giant?!?! Let me  <br />
        take a closer look...
      </>
    );
    visible = true;
  } else if (scrollY >= 0 && scrollY <= 1000) {
    text = (
      <>
        YOUNG BOY <br />
        NEVER BROKE AGAIN!
      </>
    );
    visible = true;
  }

  // do not render if outside any target scroll zone
  if (!visible) return null;

  return (
    // cloud-shaped speech bubble fixed above Jack
    <div
      className="text-cloud"
      style={{
        position: "fixed",               // stays in same position on screen
        top: "15%",                      // vertical offset from top of screen
        left: "50%",                     // centered horizontally
        transform: "translateX(-50%)",   // adjust position to truly center
        padding: "20px 30px",
        background: `url(/images/text-cloud.png) no-repeat center/contain`, // bubble background
        width: "400px",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#333",
        zIndex: 50,                      // place it above most elements
        animation: "fadeIn 0.6s ease-out", // smooth appearance
      }}
    >
      {/* slightly nudged text inside the bubble */}
      <div style={{ transform: "translateY(-6px)" }}>{text}</div>
    </div>
  );
}

export default TextClouds;
