import React from "react";
import { useState } from "react";
import '../components-css/SearchBar.css';

const SearchBar = ({ onSearch, randomize }) => {
  //create the state with its modifier and initialise it as empty string
  const [id, setId] = useState("");

  //every time the user writes something on the input , this data is stored on the local state id
  const handleChange = (e) => {
    // update the "id" state with the value entered by the user
    setId(e.target.value);
  };
  // handle the click event when the "add" button is clicked
  const handleSearchClick = () => {
    // call the "onSearch" prop with the"id"
    onSearch(id);
  };
  //handle the click event when the randomize button is clicked
  const handleRandomizeClick = () => {
    randomize();
  };

  return (
    <div className="SearchBar">
      <input 
      type="search" 
      value={id} 
      onChange={handleChange}
      placeholder="Enter character ID..." 
      />
      <button onClick={handleSearchClick}> Add new character! </button>
      <button className="randomize" onClick={handleRandomizeClick}> Generate Random Character </button>
    </div>
  );
};
export default SearchBar;
