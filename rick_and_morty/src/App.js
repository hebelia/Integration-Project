import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import { useState } from "react";

function App() {
  //using hooks that we imported from react
  //determine the local state and its modifier, initialize it on an empty array
  const [characters, setCharacters] = useState([]);

  //previous onSearch function
  //   const onSearch = () => {
  //     // i use the spread operator to create a new array with the existing characters and the new example character
  //     setCharacters([...characters, example]);
  //   };

  //API CONNECTION - promise
  function onSearch(id) {
    //parse the id to int because we recieve a string
    let parsedID = parseInt(id, 10);
    //we check if the character exists in the local state of characters
    const characterShown = characters.some(
      (character) => character.id === parsedID
    );
    //alert
    if (characterShown) {
      window.alert("Oops! That character is already shown below!");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("There are no characters for that ID!");
        }
      }
    );
  }

  //onClose function
  const onClose = (id) => {
    //we parse the id to a number because we recieve a string
    let parsedID = parseInt(id, 10);
    setCharacters((oldChars) =>
      oldChars.filter((character) => character.id !== parsedID)
    );
  };

  //generate random id function
  const generateRandomCharacter = () => {
    let randomID = Math.floor(Math.random() * 826) + 1;
    //check local state of characters to see if the id already exists in the array
    const characterExists = characters.some(
      (character) => character.id === randomID
    );
    //if it exists it generates a new random character using recursion
    if (characterExists) {
      return generateRandomCharacter();
    }
    //if the generated id is now shown it returns it
    return randomID;
  };
  // randomize function that will be given by props to the button on the nav component
  const randomize = () => {
    let randomID = generateRandomCharacter();
    onSearch(randomID);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} randomize={randomize} characters={characters} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
