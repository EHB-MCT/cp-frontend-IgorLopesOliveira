import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFairyTales } from '../api/fetchFairyTales';

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

  if (!data) return <p>Loading...</p>;

  return (
    <div className="making-of-page">
      <h1 className="page-title">MAKING OF</h1>

      {/* banner */}
      <div className="banner-container">
        <img src={data.imgBanner} alt="Banner" className="banner-image" />
      </div>

      {/* description */}
      <div className="content-container">
        <div className="text-section">
          <h2 className="text-title">Story</h2>
          <p className="text-paragraph">{data.description}</p>
        </div>
        <div className="image-section">
          <img src={data.imgThumbnail} alt={data.nameStudent} className="side-image" />
        </div>
      </div>

      {showMore && (
        <div className="extra-content">
          <h2 className="text-title">Making of</h2>
          <p className="text-paragraph">
            This website is an interactive scroll-based journey showcasing the student interpretation of <strong>{data.fairytale}</strong>. It explores storytelling through modern web techniques including parallax scrolling, dynamic assets, and modular page composition.
          </p>
          <h2 className="text-title">Author & Genre</h2>
          <p className="text-paragraph">
            Made by <strong>{data.nameStudent}</strong>. Genre: <strong>{data.genre}</strong>. Based on: <strong>{data.storyFrom}</strong>.
          </p>
        </div>
      )}

      <div className="read-more-container">
        <button className="read-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>

      <div className="extra-info-section">
        <h2 className="text-title">Extra Images</h2>
        <div className="extra-images">
          {data.imgsExtra.filter(Boolean).map((img, idx) => (
            <img key={idx} src={img} alt={`Extra ${idx}`} className="extra-image" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MakingOf;
