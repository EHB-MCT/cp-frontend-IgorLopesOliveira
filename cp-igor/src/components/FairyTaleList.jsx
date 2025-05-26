import React from "react";
import FairyTaleItem from "./FairyTaleItem";

const FairyTaleList = ({ slides }) => {
  const allItems = slides.flat();

  return (
    <div className="fairy-tale-list">
      <h2 className="list-title">STORIES</h2>

      <ul className="list-grid">
        {allItems.map((item, index) => (
          <FairyTaleItem
            key={index}
            id={item.link.split('/').pop()}
            image={item.image}
            studentName={item.studentName}
            link={item.link}
            fairyTaleTitle={item.fairyTaleTitle}
            genre={item.genre}
            internal={item.internal}
          />

        ))}
      </ul>
    </div>
  );
};

export default FairyTaleList;
