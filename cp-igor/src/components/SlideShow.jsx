import React, { useState } from "react";
import Box from "./Box";

const SlideShow = ({ slides }) => {
  const itemsPerSlide = 2;

  // flatten all slides and group them in chunks of 2
  const flattened = slides.flat();
  const totalChunks = Math.ceil(flattened.length / itemsPerSlide);

  const [currentIndex, setCurrentIndex] = useState(0);

  // move to previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalChunks - 1 : prev - 1
    );
  };

  // move to next slide
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === totalChunks - 1 ? 0 : prev + 1
    );
  };

  // get only the 2 items for the current slide
  const currentSlide = flattened.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="slideshow">
      <h1 className="title">Hot Today</h1>

      <div className="slideshow-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="slide">
          {currentSlide.map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
