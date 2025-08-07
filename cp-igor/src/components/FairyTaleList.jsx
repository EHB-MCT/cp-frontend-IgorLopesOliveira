// ✅ Import React so we can use JSX
import React from "react";

// ✅ Import the component that renders each individual story box
import FairyTaleItem from "./FairyTaleItem";

// ✅ Define the FairyTaleList component
// This component receives `slides` as a prop (an array of story slide groups)
const FairyTaleList = ({ slides }) => {
  // ✅ Flatten the 2D array into a 1D array so we can loop through all stories
  // `slides` originally looks like: [[item1, item2], [item3, item4], ...]
  // `.flat()` turns it into: [item1, item2, item3, item4, ...]
  const allItems = slides.flat();

  return (
    // ✅ Outer container with a class for styling
    <div className="fairy-tale-list">
      {/* ✅ Section title */}
      <h2 className="list-title">STORIES</h2>

      {/* ✅ Unordered list that lays out all the story boxes in a grid */}
      <ul className="list-grid">
        {allItems.map((item, index) => (
          // ✅ Render a FairyTaleItem component for each story
          <FairyTaleItem
            key={index} // React needs a unique key for each list item

            // ✅ Extract ID from the URL (e.g., "/makingof/jack" → "jack")
            id={item.link.split('/').pop()}

            // ✅ Pass props to display inside the FairyTaleItem box
            image={item.image}
            studentName={item.studentName}
            link={item.link}
            fairyTaleTitle={item.fairyTaleTitle}
            genre={item.genre}
            internal={item.internal} // used to decide internal vs external link
          />
        ))}
      </ul>
    </div>
  );
};

// ✅ Export the component so it can be used in App.jsx
export default FairyTaleList;
