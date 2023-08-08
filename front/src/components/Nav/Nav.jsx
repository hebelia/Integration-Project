import React from "react"; // import React when using JSX.
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch, randomize, logout }) {
  const handleSearch = (characterID) => {
    // call the onSearch function
    onSearch(characterID);
  };

  return (
    <div className="Nav">
      <SearchBar onSearch={handleSearch} randomize={randomize} />
      <div className="buttonsContainer">
        <button >
          <NavLink className="navLink" to="/home">▷Home</NavLink>
        </button>
        <button >
          <NavLink className="navLink" to="/favorites">▷Favorites</NavLink>
        </button>
        <button >
          <NavLink className="navLink" to="/about">▷About</NavLink>
        </button>
        <button className="navLink"  onClick={logout}>
        ▷Logout
        </button>
      </div>
    </div>
  );
}
export default Nav;
