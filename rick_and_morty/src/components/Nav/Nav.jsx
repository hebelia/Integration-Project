import React from "react"; // import React when using JSX.
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch, randomize }) {
  const handleSearch = (characterID) => {
    // call the "onSearch" function from the parent component (App.js)
    onSearch(characterID);
  };

  return (
    <div className="Nav">
      {/* NOTE: ask if thehome and about buttons can be moved to the search bar */}
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <SearchBar onSearch={handleSearch} randomize={randomize} />
    </div>
  );
}
export default Nav;
