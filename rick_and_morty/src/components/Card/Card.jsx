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

//STYLE SYNTAX FOR .MODULE.CSS

// <div className={style.div}>
// <button className={style.btn} onClick={() => onClose(id)}>
//   X
// </button>
// <img className={style.image} src={image} alt={name} />

// <Link to={`/detail/${id}/`}>
//   <h4 className={style.name}>{name}</h4>
// </Link>

// <div className={style.data}>
//   <h2>{species}</h2>
//   <h2>{gender}</h2>
//   <h2>Status: {status}</h2>
//   <h2>Origin: {origin}</h2>
// </div>
// </div>