import { Link } from "react-router-dom";

// box component displays a single fairy tale card with image and text
const Box = ({ image, studentName, fairyTaleTitle, genre, link, internal }) => {
  // content to be wrapped inside a link
  const content = (
    <>
      {/* image for the fairy tale */}
      <img src={image} alt={studentName} className="image" />

      {/* student's name */}
      <p className="student-name">{studentName}</p>

      {/* title of the fairy tale */}
      <p className="fairy-tale-title">{fairyTaleTitle}</p>

      {/* genre of the fairy tale */}
      <p className="genre">{genre}</p>
    </>
  );

  return (
    <div className="box">
      {/* internal or external link */}
      {internal ? (
        <Link to={link}>{content}</Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </div>
  );
};

export default Box;
