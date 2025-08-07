// ✅ Import Link from react-router-dom to enable client-side routing
import { Link } from "react-router-dom";

// ✅ Define the Box component which receives props for one fairy tale
const Box = ({ id, image, studentName, fairyTaleTitle, genre }) => {
  // ✅ Prepare the correct image path:
  // If it's an external URL (starts with "http"), use it directly.
  // Otherwise, it's a local image from /public, so prepend the base URL (important for GitHub Pages).
  const imagePath = image.startsWith("http")
    ? image
    : `${import.meta.env.BASE_URL}${image}`;

  return (
    // ✅ A container div for one "Box" or card-style item
    <div className="box">
      {/* ✅ Wrap the entire box in a Link so clicking it goes to the /makingof/:id page */}
      <Link to={`/makingof/${id}`}>
        {/* ✅ Show the fairy tale image. Use student name as alt text for accessibility */}
        <img src={imagePath} alt={studentName} className="image" />

        {/* ✅ Show the student's name below the image */}
        <p className="student-name">{studentName}</p>

        {/* ✅ Show the title of the fairy tale */}
        <p className="fairy-tale-title">{fairyTaleTitle}</p>

        {/* ✅ Show the genre of the fairy tale */}
        <p className="genre">{genre}</p>
      </Link>
    </div>
  );
};

// ✅ Export the Box component so it can be used inside the SlideShow component
export default Box;
