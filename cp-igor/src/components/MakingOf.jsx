import { useState } from 'react';
import { Link } from 'react-router-dom';

function MakingOf() {
  // controls whether the extended "Making Of" content is shown
  const [showMore, setShowMore] = useState(false);

  // toggles the visibility of the extended content
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="making-of-page">
      {/* page title */}
      <h1 className="page-title">MAKING OF</h1>

      {/* banner image at the top */}
      <div className="banner-container">
        <img src="/images/bean-banner.png" alt="Banner" className="banner-image" />
      </div>

      {/* section with story description and an illustration */}
      <div className="content-container">
        <div className="text-section">
          <h2 className="text-title">Story</h2>
          <p className="text-paragraph">
            Jack and the Beanstalk tells the story of a poor boy named Jack who lives with his mother...
          </p>
        </div>

        <div className="image-section">
          <img src="/images/box1.png" alt="Making Of" className="side-image" />
        </div>
      </div>

      {/* conditional content for more details about the project */}
      {showMore && (
        <div className="extra-content">
          <h2 className="text-title">Making of</h2>
          <p className="text-paragraph">
            This website is an interactive scroll-based journey that tells the story of Jack and the Beanstalk...
          </p>
          <p className="text-paragraph">
            The background features a vertical gradient from light blue to dark blue...
          </p>
          <p className="text-paragraph">
            To bring the story to life, text clouds appear above Jack...
          </p>
          <p className="text-paragraph">
            The entire experience is accompanied by background music...
          </p>
          <p className="text-paragraph">
            This project was a creative and technical exploration...
          </p>

          <h2 className="text-title">Author & Genre</h2>
          <p className="text-paragraph">
            <strong>Jack and the Beanstalk</strong> is a traditional English fairy tale...
          </p>
        </div>
      )}

      {/* button to expand or collapse the detailed content */}
      <div className="read-more-container">
        <button className="read-more-button" onClick={handleToggle}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* additional section showing design inspiration and licensing info */}
      <div className="extra-info-section">
        <h2 className="text-title">Extra Information</h2>

        {/* collage of extra images */}
        <div className="extra-images">
          <img src="/images/box2.png" alt="Source 1" className="extra-image" />
          <img src="/images/box3.png" alt="Source 2" className="extra-image" />
          <img src="/images/box5.png" alt="Source 3" className="extra-image" />
        </div>

        <p className="text-paragraph">
          All visual assets used in this project were either created by me...
        </p>
        <p className="text-paragraph">
          This project draws heavy visual and structural inspiration from NASA Prospect...
        </p>
        <p className="text-paragraph">
          Every effort was made to respect copyright usage...
        </p>
      </div>
    </div>
  );
}

export default MakingOf;
