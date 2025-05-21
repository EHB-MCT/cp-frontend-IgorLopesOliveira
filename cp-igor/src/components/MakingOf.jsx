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
        <img src="./images/bean-banner.png" alt="Banner" className="banner-image" />
      </div>

      {/* section with story description and an illustration */}
      <div className="content-container">
        <div className="text-section">
          <h2 className="text-title">Story</h2>
          <p className="text-paragraph">
            Jack and the Beanstalk tells the story of a poor boy named Jack who lives with his mother. One day, desperate for money, Jack is sent to the market to sell their only cow. Along the way, he meets a mysterious old man who offers him five shimmering beans in exchange for the animal. Jack accepts the trade and returns home proudly — only to be scolded by his mother, who throws the beans out the window in frustration.
          </p>
          <p className="text-paragraph">
            Overnight, the beans grow into a gigantic beanstalk that stretches high into the sky. Curious and brave, Jack climbs it and discovers a magical land above the clouds. There, he finds a castle inhabited by a fearsome giant who owns incredible treasures: a hen that lays golden eggs, a singing harp, and piles of gold.          </p>
          <p className="text-paragraph">
            Through courage and quick thinking, Jack manages to steal some of the treasures and escape the giant's wrath. In the final attempt, as the giant chases him down the stalk, Jack grabs an axe and chops it down just in time, sending the giant falling to his doom. Jack and his mother are no longer poor, and they live happily ever after — thanks to a little magic and a lot of bravery.          </p>
        </div>

        <div className="image-section">
          <img src="./images/box1.png" alt="Making Of" className="side-image" />
        </div>
      </div>

      {/* conditional content for more details about the project */}
      {showMore && (
        <div className="extra-content">
          <h2 className="text-title">Making of</h2>
          <p className="text-paragraph">
            This website is an interactive scroll-based journey that tells the story of Jack and the Beanstalk. As you scroll upward, you follow Jack's adventure from the market trade to the towering beanstalk, the castle in the sky, and the final escape from the giant. The storytelling is immersive and linear, designed as one continuous vertical experience.
          </p>
          <p className="text-paragraph">
            The background features a vertical gradient from light blue to dark blue, visually representing Jack's climb from the earth to the sky. Each scene is layered with parallax elements—clouds, trees, mountains, and props—that move at different speeds to create a sense of depth and animation.
          </p>
          <p className="text-paragraph">
            To bring the story to life, text clouds appear above Jack at specific scroll points, simulating thoughts or dialogue tied to the moment. Interactive objects, like golden eggs, can be clicked to trigger small animations, and when all five are found, a secret easter egg scene—Golden Heaven—is revealed.
          </p>
          <p className="text-paragraph">
            The entire experience is accompanied by background music that loops softly to maintain atmosphere, with a mute/unmute button available for control. Jack remains fixed in the center of the screen during the scroll, and his sprite changes depending on the scene to simulate motion and interaction.
          </p>
          <p className="text-paragraph">
            This project was a creative and technical exploration of combining animation, storytelling, and web development. It was built using React and Vite, with careful use of hooks, conditional rendering, and modular components to manage scenes, interactions, and UI logic. The goal was to turn a classic fairy tale into a modern, immersive, scroll-driven web experience.
          </p>

          <h2 className="text-title">Author & Genre</h2>
          <p className="text-paragraph">
            <strong>Jack and the Beanstalk</strong> is a traditional English fairy tale that has been passed down through generations. 
            The earliest known version was published by <strong>Benjamin Tabart</strong> in <strong>1807</strong>, and the story was later popularized by <strong>Joseph Jacobs</strong> in his 1890 collection <em>English Fairy Tales</em>.
            It belongs to the genres of <strong>folk tale</strong>, <strong>fantasy</strong>, and <strong>adventure</strong>. 
            With its themes of bravery, curiosity, and transformation, it remains one of the most iconic and enduring stories in Western folklore.
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
          <img src="./images/box2.png" alt="Source 1" className="extra-image" />
          <img src="./images/box3.png" alt="Source 2" className="extra-image" />
          <img src="./images/box5.png" alt="Source 3" className="extra-image" />
        </div>

        <p className="text-paragraph">
          All visual assets used in this project were either created by me in Adobe Illustrator or adapted from free resources found on platforms like Unsplash and Pixabay. 
          In many cases, downloaded elements were manually vectorized and styled to match the visual tone of the project.
        </p>
        <p className="text-paragraph">
          This project draws strong visual and structural inspiration from <strong>NASA Prospect</strong>, especially in its vertical scroll storytelling, fixed-character navigation, and layered parallax composition. 
          While telling a completely different story, this project pays tribute to the creative techniques and immersive feel of NASA Prospect.
        </p>
        <p className="text-paragraph">
          Every effort was made to respect copyright usage and licensing. Sources are available upon request, and credit will be provided if needed. 
          This project was created solely for educational purposes as part of a multimedia design course.
        </p>
      </div>
    </div>
  );
}

export default MakingOf;
