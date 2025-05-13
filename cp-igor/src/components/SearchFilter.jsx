// functional component for the search input
function SearchFilter({ onSearch }) {
  return (
    // input field to type search keywords
    <input 
      type="text" 
      placeholder="Wat zoek je..." // placeholder text shown when input is empty
      onChange={(event) => onSearch(event.target.value)} // calls onSearch prop whenever user types
      className="search-bar" // styled via CSS class
    />
  );
}

export default SearchFilter;
