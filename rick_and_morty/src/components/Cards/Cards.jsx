import React from "react";
import "./Cards.css";
import Card from "../Card";

function Cards({ characters, onClose }) {
  return (
    <div className="Cards">
      {characters.map(
        ({ id, name, species, gender, image, origin, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin}
              status={status}
              // onClose={() => window.alert('Close card emulation')}
              // Pass the onClose function and the character ID to the Card component
              onClose={() => onClose(id)}
            ></Card>
          );
        }
      )}
    </div>
  );
}
export default Cards;
