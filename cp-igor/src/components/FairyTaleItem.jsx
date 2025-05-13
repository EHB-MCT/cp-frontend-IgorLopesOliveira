import React from "react";
import { Link } from "react-router-dom";

// receives props for the fairy tale item card
function FairyTaleItem({ image, studentName, fairyTaleTitle, genre, link, internal }) {
  // reusable content block for both internal and external links
  const content = (
    <>
      <img src={image} alt={studentName} className="fairy-image" />  {/* thumbnail image */}
      <h3 className="fairy-title">{fairyTaleTitle}</h3>              {/* title of the story */}
      <p className="fairy-student">{studentName}</p>                 {/* student name */}
      <p className="fairy-genre">{genre}</p>                         {/* genre tag */}
    </>
  );

  return (
    <li className="fairy-item">
      {/* uses react-router <Link> if it's an internal route, otherwise opens a new tab */}
      {internal ? (
        <Link to={link}>{content}</Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </li>
  );
}

export default FairyTaleItem;
