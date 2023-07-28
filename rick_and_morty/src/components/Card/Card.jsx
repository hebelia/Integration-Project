import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="Card">
      <div className="Top">
        <button className="CloseCard" onClick={() => props.onClose(props.id)}>
          {" "}
          ✕{" "}
        </button>

        {/* nav link to the details/add style when hovering */}
        <NavLink to={`/detail/${props.id}/`}>
          <h2 className="Name">{props.name}</h2>
        </NavLink>
      </div>

      <div className="InfoBox">
        <h2 className="Status">▷ {props.status}</h2>
        <h2 className="Species">▷ {props.species}</h2>
        <h2 className="Gender">▷ {props.gender}</h2>
        <h2 className="Origin">▷ {props.origin?.name}</h2>
      </div>
      <img src={props.image} alt="" className="img" />
    </div>
  );
}

export default Card;
