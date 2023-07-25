import React from 'react';
import '../components-css/Card.css';

function Card(props) {
  return (
    <div className="Card">
      <button onClick={() =>props.onClose(props.id)}> x </button>
      <h2>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt="" />
      
    </div>
  );
}

export default Card;