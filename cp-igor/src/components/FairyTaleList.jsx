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
            key={index}                         // unique key for each list item
            image={item.image}                  // image of the fairy tale
            studentName={item.studentName}      // name of the student
            link={item.link}                    // external link to the fairy tale
            fairyTaleTitle={item.fairyTaleTitle} // title of the fairy tale
            genre={item.genre}    
            internal={item.internal}              // genre of the story
          />
        ))}
      </ul>
    </div>
  );
};

export default FairyTaleList;
