import React, { useState } from 'react';

function MakingOfJack() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="making-of-page">
      <h1 className="page-title">MAKING OF</h1>

      {/* banner */}
      <div className="banner-container">
        <img
          src={`${import.meta.env.BASE_URL}images/bean-banner.png`}
          alt="Banner"
          className="banner-image"
        />
      </div>

      {/* description */}
      <div className="content-container">
        <div className="text-section">
          <h2 className="text-title">Story</h2>
          <p className="text-paragraph">
            Jack and the Beanstalk tells the story of a poor boy named Jack who lives with his
            mother. One day, desperate for money, Jack is sent to the market to sell their only
            cow. Along the way, he meets a mysterious old man who offers him five shimmering beans
            in exchange for the animal. Jack accepts the trade and returns home proudly — only to
            be scolded by his mother, who throws the beans out the window in frustration.
          </p>
          <p className="text-paragraph">
            Overnight, the beans grow into a gigantic beanstalk that stretches high into the sky.
            Curious and brave, Jack climbs it and discovers a magical land above the clouds. There,
            he finds a castle inhabited by a fearsome giant who owns incredible treasures: a hen
            that lays golden eggs, a singing harp, and piles of gold.
          </p>
          <p className="text-paragraph">
            Through courage and quick thinking, Jack manages to steal some of the treasures and
            escape the giant's wrath. In the final attempt, as the giant chases him down the stalk,
            Jack grabs an axe and chops it down just in time, sending the giant falling to his
            doom. Jack and his mother are no longer poor, and they live happily ever after — thanks
            to a little magic and a lot of bravery.
          </p>
        </div>

        <div className="image-section">
          <img
            src="images/thumbnail-jack.png"
            alt="Making Of"
            className="side-image"
          />
        </div>
      </div>

      {/* read more */}
      {showMore && (
        <div className="extra-content">
          <h2 className="text-title">Extra Information</h2>
          <p className="text-paragraph">
            This project was a creative and technical exploration of combining animation,
            storytelling, and web development. It was built using React and Vite, with careful use
            of hooks, conditional rendering, and modular components to manage scenes, interactions,
            and UI logic.
          </p>
          <p className="text-paragraph">
            The background features a vertical gradient from light blue to dark blue, visually
            representing Jack's climb from the earth to the sky. Each scene is layered with
            parallax elements—clouds, trees, mountains, and props—that move at different speeds.
          </p>
          <p className="text-paragraph">
            All visual assets used in this project were either created by me in Adobe Illustrator
            or adapted from free resources found on platforms like Unsplash and Pixabay. In many
            cases, elements were manually vectorized and styled.
          </p>
          <p className="text-paragraph">
            This project draws strong visual and structural inspiration from <strong>NASA
            Prospect</strong>. While telling a completely different story, it pays tribute to its
            scroll-based storytelling and immersive composition.
          </p>
        </div>
      )}

      <div className="read-more-container">
        <button className="read-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* extra images */}
      <div className="extra-info-section">
        <h2 className="text-title">Extra Images</h2>
        <div className="extra-images">
          <img
            src="images/extraImage1.png"
            alt="Extra 1"
            className="extra-image"
          />
          <img
            src="images/extraImage2.png"
            alt="Extra 2"
            className="extra-image"
          />
          <img
            src="images/extraImage3.png"
            alt="Extra 3"
            className="extra-image"
          />
        </div>
      </div>

      {/* fixed button to go to parallax */}
      <button
        onClick={() => (window.location.href = `${import.meta.env.BASE_URL}sprookje`)}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        Go to Parallax
      </button>
    </div>
  );
}

export default MakingOfJack;
