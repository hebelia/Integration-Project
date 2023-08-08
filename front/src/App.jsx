//style
import "./App.css";
//components
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
//dependencies
import axios from "axios";
import { useState, useEffect, useParams } from "react";
import {
  NavLink,
  useLocation,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
//constants import
import {
  EMAIL,
  PASSWORD,
  URL,
  API_KEY,
} from "./components/Config/constants.js";

function App() {
  //using hooks that we imported from react
  //determine the local state and its modifier, initialize it on an empty array
  const [characters, setCharacters] = useState([]);
  //pathname to hide nav
  const { pathname } = useLocation();
  //
  const navigate = useNavigate();
  //
  const [access, setAccess] = useState(false);
  //login function to send by props to the login form component
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };
  //state handler for access state -  navigates the user back to login form when the access state resets to false
  useEffect(
    () => {
      !access && navigate("/");
    },
    //dependency array -  ensures that the effect is only triggered when the access state changes
    [access]
  );

  //logout function
  const logout = () => {
    setAccess(false);
    // remove authentication status
    localStorage.removeItem("isAuthenticated");
    // redirects to the login page
    navigate("/");
  };

  //API CONNECTION - promise
  const onSearch = (id) => {
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

    axios(`${URL}/${id}?${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("There are no characters for that ID!");
      }
    });
  };

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
      {/* video background */}
      <div className="video-background">
        <video loop muted autoPlay playsInline>
          <source src="/media/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* rendering the Nav component conditionally */}
      {pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          randomize={randomize}
          characters={characters}
          logout={logout}
        />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* NOTE: REMOVE NAV PATH ON ERROR COMPONENT - ADD LINK TO HOME PAGE */}
        {/* NOTE: FIX redirecting to login when unknown route */}
        <Route path="/*" component={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

//DESKTOP INTEGRATION PROJECT
