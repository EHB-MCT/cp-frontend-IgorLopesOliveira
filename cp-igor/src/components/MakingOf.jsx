// import hooks and data function
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFairyTales } from '../api/fetchFairyTales';

function MakingOf() {
  // get the id from the url
  const { id } = useParams();

  // state for the selected fairy tale data
  const [data, setData] = useState(null);

  // state to show or hide the "read more" section
  const [showMore, setShowMore] = useState(false);

  // fetch data when component mounts or id changes
  useEffect(() => {
    async function load() {
      const all = await fetchFairyTales(); // fetch all fairy tales
      const found = all.find((item) => item.id === id); // find the one with matching id
      setData(found); // update state with selected story
    }
    load(); // run the fetch function
  }, [id]);

  // show loading message while data is not ready
  if (!data) return <p>loading...</p>;

  return (
    <div className="making-of-page">
      {/* page title */}
      <h1 className="page-title">making of</h1>

      {/* big banner image */}
      <div className="banner-container">
        <img src={data.imgBanner} alt="banner" className="banner-image" />
      </div>

      {/* main content section with description and small image */}
      <div className="content-container">
        <div className="text-section">
          <h2 className="text-title">story</h2>
          <p className="text-paragraph">{data.description}</p>
        </div>
        <div className="image-section">
          <img
            src={data.imgThumbnail}
            alt={data.nameStudent}
            className="side-image"
          />
        </div>
      </div>

      {/* extra section visible when "read more" is clicked */}
      {showMore && (
        <div className="extra-content">
          <h2 className="text-title">making of</h2>
          <p className="text-paragraph">
            this website is an interactive scroll-based journey showcasing the student interpretation of <strong>{data.fairytale}</strong>. it explores storytelling through modern web techniques including parallax scrolling, dynamic assets, and modular page composition.
          </p>
          <h2 className="text-title">author & genre</h2>
          <p className="text-paragraph">
            made by <strong>{data.nameStudent}</strong>. genre: <strong>{data.genre}</strong>. based on: <strong>{data.storyFrom}</strong>.
          </p>
        </div>
      )}

      {/* button to show or hide extra content */}
      <div className="read-more-container">
        <button
          className="read-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'read less' : 'read more'}
        </button>
      </div>

      {/* show extra images if any */}
      <div className="extra-info-section">
        <h2 className="text-title">extra images</h2>
        <div className="extra-images">
          {data.imgsExtra.filter(Boolean).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`extra ${idx}`}
              className="extra-image"
            />
          ))}
        </div>
      </div>

      {/* fixed button to view the parallax project or show alert if not available */}
      <button
        onClick={() => {
          if (data.fairytaleLink) {
            window.open(data.fairytaleLink, "_blank");
          } else {
            alert("this project is still in progress.");
          }
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        view parallax experience
      </button>
    </div>
  );
}

export default MakingOf;
