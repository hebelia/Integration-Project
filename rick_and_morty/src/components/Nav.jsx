import React from "react"; // import React when using JSX.
import SearchBar from "./SearchBar.jsx";
import "../components-css/Nav.css";

function Nav({ onSearch, randomize }) {
  const handleSearch = (characterID) => {
    // call the "onSearch" function from the parent component (App.js)
    onSearch(characterID);
  };

  return (
    <div className="Nav">
      <SearchBar onSearch={handleSearch} />
      {/* randomize button that recieves by props the function randomize and executes it */}
      
      {/* NOTE: change the icon later */}
      <button className="randomize" onClick={randomize}> Generate Random Character </button>
    </div>
  );
}
export default Nav;
