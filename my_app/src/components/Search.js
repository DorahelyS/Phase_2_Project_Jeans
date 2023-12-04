import React from "react";

function Search({search, updateSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Jean:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearch} value = {search}
      />
    </div>
  );
}

export default Search;
