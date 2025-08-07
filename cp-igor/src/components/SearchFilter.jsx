// ✅ This is a simple presentational component for a search input
function SearchFilter({ onSearch }) {
  return (
    // ✅ Input element of type "text" with a placeholder in Dutch
    <input 
      type="text" 
      placeholder="Wat zoek je..." // Translates to "What are you looking for..."
      
      // ✅ When the user types something, call the `onSearch` function
      // ✅ Pass the current value of the input field to the parent
      onChange={(event) => onSearch(event.target.value)}
      
      // ✅ Apply CSS class for styling
      className="search-bar"
    />
  );
}

// ✅ Export the component so it can be used in other components (like App)
export default SearchFilter;
