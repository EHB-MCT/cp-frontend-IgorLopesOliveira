import { Link } from "react-router-dom";

// Component for one featured card inside the slideshow (HOT TODAY section)
const Box = ({ id, image, studentName, fairyTaleTitle, genre }) => {
  // Handle both external (full URL) and internal image paths
  const imagePath = image.startsWith("http")
    ? image
    : `${import.meta.env.BASE_URL}${image}`;

  return (
    <div className="box">
      {/* Clicking the box takes you to the specific fairy tale's Making Of page */}
      <Link to={`/makingof/${id}`}>
        {/* Thumbnail image */}
        <img src={imagePath} alt={studentName} className="image" />

        {/* Student name */}
        <p className="student-name">{studentName}</p>

        {/* Title of the fairy tale */}
        <p className="fairy-tale-title">{fairyTaleTitle}</p>

        {/* Genre */}
        <p className="genre">{genre}</p>
      </Link>
    </div>
  );
};

export default Box;
