import React from "react";
// import "./Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  //hook to capture the id param because we know that the endpoint has an id
  const { id } = useParams();

  //
  const [character, setCharacter] = useState({});

  // replace for the updated api request
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("There are no characters for that ID!");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h2>ABOUT COMPONENT</h2>

      {/* good practice: when working with async requests, use conditionals to give time to the server to respond */}
      {/* previous */}

      <img alt="" src={character.image && character.image}></img>

      {/* only chaining operator */}

      <h2>{character.name && character.name}</h2>
      <h2>{character.status && character.status}</h2>
      <h2>{character.species && character.species}</h2>
      <h2>{character.gender && character.gender}</h2>

      {/* in this case it is not enough with the conditional and we have to use the chaining operator */}

      <h2>{character.origin?.name && character.origin.name}</h2>
    </div>
  );
};
export default Detail;
