import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFairyTales } from '../api/fetchFairyTales';
import YoutubeEmbed from './YoutubeEmbed';


function MakingOf() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function load() {
      const all = await fetchFairyTales();
      const found = all.find((item) => item.id === id); 
      setData(found); 
    }
    load(); 
  }, [id]);

  if (!data) return <p>loading...</p>;

  return (
    <div className="making-of-page">
      <h1 className="page-title">making of</h1>

      <div className="banner-container">
        <img src={data.imgBanner} alt="banner" className="banner-image" />
      </div>

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

      <div className="read-more-container">
        <button
          className="read-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'read less' : 'read more'}
        </button>
      </div>

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
        {data.videoExplainer && (
          <div className="video-container">
            <h2 className="text-title">video explainer</h2>
            <YoutubeEmbed embedId={data.videoExplainer} />
          </div>
        )}
      </div>

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
