import React from "react";
import FairyTaleItem from "./FairyTaleItem";

const FairyTaleList = ({ slides }) => {
  // flatten the slides array to get a single array of all items
  const allItems = slides.flat();

  return (
    <div className="fairy-tale-list">
      {/* section title */}
      <h2 className="list-title">STORIES</h2>

      {/* list of all fairy tale cards */}
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
