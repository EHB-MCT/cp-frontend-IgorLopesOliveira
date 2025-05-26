function SearchFilter({ onSearch }) {
  return (
    <input 
      type="text" 
      placeholder="Wat zoek je..."
      onChange={(event) => onSearch(event.target.value)}
      className="search-bar"
    />
  );
}

export default SearchFilter;
