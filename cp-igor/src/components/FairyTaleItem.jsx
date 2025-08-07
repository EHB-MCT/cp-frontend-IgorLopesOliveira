// ✅ Import `Link` from react-router-dom to enable internal page navigation
import { Link } from "react-router-dom";

// ✅ The component receives props for one fairy tale
function FairyTaleItem({ id, image, studentName, fairyTaleTitle, genre }) {
  // ✅ Check if the image path is already a full URL
  // If not, prepend the Vite `BASE_URL` so the image loads correctly from the `public/` folder
  const imagePath = image.startsWith("http")
    ? image // Use as-is if it's an external URL
    : `${import.meta.env.BASE_URL}${image}`; // Otherwise prepend base URL for local image

  return (
    // ✅ List item for a single fairy tale card
    <li className="fairy-item">
      {/* ✅ Make the entire card clickable, linking to its making-of page (e.g. /makingof/jack) */}
      <Link to={`/makingof/${id}`}>
        {/* ✅ Display the image with alt text as the student name */}
        <img src={imagePath} alt={studentName} className="fairy-image" />

        {/* ✅ Show the fairy tale title */}
        <h3 className="fairy-title">{fairyTaleTitle}</h3>

        {/* ✅ Show the name of the student who made it */}
        <p className="fairy-student">{studentName}</p>

        {/* ✅ Display the genre of the fairy tale */}
        <p className="fairy-genre">{genre}</p>
      </Link>
    </li>
  );
}

// ✅ Export this component to be used inside the FairyTaleList
export default FairyTaleItem;
