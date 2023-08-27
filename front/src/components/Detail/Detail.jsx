import React from "react";
import "./Detail.css";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
//constants import
import { EMAIL, PASSWORD, URL, API_KEY } from "../Config/constants.js";

const Detail = () => {
  //hook to capture the id param because we know that the endpoint has an id
  const { id } = useParams();

  //
  const [character, setCharacter] = useState({});

  // replace for the updated api request
  useEffect(() => {
    //previous `${URL}/${id}?${API_KEY}`
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("There are no characters for that ID!");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className="DetailContainer">
      <h2>▷ DETAILS ↴</h2>

      <div className="Detail">
        {/* good practice: when working with async requests, use conditionals to give time to the server to respond */}
        <NavLink to={`/home`}>
          <button className="CloseDetail"> ✕ </button>
        </NavLink>
        <img
          alt="character-image"
          src={character.image && character.image}
        ></img>

        {/* only chaining operator */}
        <div className="Info">
          <h2 className="name-text"><span>▻</span> Name: {character.name && character.name}</h2>
          <h2 className="margin-h2">⋄ Status: {character.status && character.status}</h2>
          <h2 className="margin-h2">⋄ Species: {character.species && character.species}</h2>
          <h2 className="margin-h2">⋄ Gender: {character.gender && character.gender}</h2>
          {/* in this case it is not enough with the conditional and we have to use the chaining operator */}
          <h2 className="margin-h2">⋄ Origin: {character.origin?.name && character.origin.name}</h2>
        </div>
      </div>
    </div>
  );
};
export default Detail;
