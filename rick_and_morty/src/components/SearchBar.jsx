import React from "react";
import { useState } from "react";
import '../components-css/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  //create the state with its modifier and initialise it as empty string
  const [id, setId] = useState("");

  //every time the user writes something on the input , this data is stored on the local state id
  const handleChange = (e) => {
    // update the "id" state with the value entered by the user
    setId(e.target.value);
  };
  // handle the click event when the "Add" button is clicked
  const handleSearchClick = () => {
    // call the "onSearch" prop with the desired "id"
    onSearch(id);
  };

  return (
    <div className="SearchBar">
      <input 
      type="search" 
      value={id} 
      onChange={handleChange} />
      <button onClick={handleSearchClick}> Add new character! </button>
    </div>
  );
};
export default SearchBar;
