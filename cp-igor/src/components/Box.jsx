import { Link } from "react-router-dom";

const Box = ({ id, image, studentName, fairyTaleTitle, genre }) => {
  const imagePath = image.startsWith("http")
    ? image
    : `${import.meta.env.BASE_URL}${image}`;

  return (
    <div className="box">
      <Link to={`/makingof/${id}`}>
        <img src={imagePath} alt={studentName} className="image" />

        <p className="student-name">{studentName}</p>

        <p className="fairy-tale-title">{fairyTaleTitle}</p>

        <p className="genre">{genre}</p>
      </Link>
    </div>
  );
};

export default Box;
