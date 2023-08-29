import React from "react";

function Search({ searchText, onSearchChange}) {

  function handleChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Search;
