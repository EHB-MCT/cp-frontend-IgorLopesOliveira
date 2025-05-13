import React, { useState } from "react";
import Box from "./Box";

const SlideShow = ({ slides }) => {
    // state to track which slide is currently shown
    const [currentIndex, setCurrentIndex] = useState(0);

    // function to go to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // function to go to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            {/* section title */}
            <h1 className="title">Hot Today</h1>

            {/* container for slideshow and navigation arrows */}
            <div className="slideshow-container">

                {/* left arrow to go to previous slide */}
                <button className="arrow left-arrow" onClick={handlePrev}>
                    &#8592;
                </button>

                {/* current slide content */}
                <div className="slide">
                    {slides[currentIndex].map((box, index) => (
                        <Box key={index} {...box} />
                    ))}
                </div>

                {/* right arrow to go to next slide */}
                <button className="arrow right-arrow" onClick={handleNext}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default SlideShow;
