// ✅ Import React and useState to manage component state
import React, { useState } from "react";

// ✅ Import the Box component that represents a single fairy tale item in the slide
import Box from "./Box";

// ✅ Define the SlideShow component
// It receives `slides`, which is a nested array of fairy tale objects
const SlideShow = ({ slides }) => {
  // ✅ Each "slide" should show 2 items (side-by-side)
  const itemsPerSlide = 2;

  // ✅ Flatten the nested array (e.g. [[item1, item2], [item3, item4]]) into a single array
  const flattened = slides.flat();

  // ✅ Calculate how many total "chunks" (slides) we need
  const totalChunks = Math.ceil(flattened.length / itemsPerSlide);

  // ✅ React state to keep track of the current slide index (starts at 0)
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Function to go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalChunks - 1 : prev - 1 // loop to the end if at beginning
    );
  };

  // ✅ Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === totalChunks - 1 ? 0 : prev + 1 // loop back to start if at end
    );
  };

  // ✅ Determine which 2 items to show on the current slide
  const currentSlide = flattened.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="slideshow">
      {/* ✅ Title for the slideshow section */}
      <h1 className="title">Hot Today</h1>

      {/* ✅ Container for the slideshow */}
      <div className="slideshow-container">

        {/* ✅ Left navigation arrow */}
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </button>

        {/* ✅ Slide content with 2 boxes */}
        <div className="slide">
          {currentSlide.map((box, index) => (
            // ✅ Render each Box component with its props spread
            <Box key={index} {...box} />
          ))}
        </div>

        {/* ✅ Right navigation arrow */}
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

// ✅ Export component for use in other files (like App.jsx)
export default SlideShow;
