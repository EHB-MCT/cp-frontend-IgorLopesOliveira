import { Link } from "react-router-dom";

function FairyTaleItem({ id, image, studentName, fairyTaleTitle, genre }) {
  const imagePath = image.startsWith("http")
    ? image
    : `${import.meta.env.BASE_URL}${image}`;

  return (
    <li className="fairy-item">
      <Link to={`/makingof/${id}`}>
        <img src={imagePath} alt={studentName} className="fairy-image" />
        <h3 className="fairy-title">{fairyTaleTitle}</h3>
        <p className="fairy-student">{studentName}</p>
        <p className="fairy-genre">{genre}</p>
      </Link>
    </li>
  );
}

export default FairyTaleItem;
