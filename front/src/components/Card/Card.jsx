//styles
import "./Card.css";
// import style from "./Card.module.css";

import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

const Card = (props) => {
  //we create a isFav state with its setter function
  const [isFav, setIsFav] = useState(false);
  //conditionals
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      // dispatch the remove action with the character's id as an argument
      props.removeFavorite(props.id);
    } else {
      setIsFav(true);
      // dispatch the add action with the character's data as an argument
      props.addFavorite({
        key: props.id,
        id: props.id,
        name: props.name,
        status: props.status,
        species: props.species,
        gender: props.gender,
        origin: props.origin,
        image: props.image,
        onClose: props.onClose,
      });
    }
  };

  //checks if the card is already on the list
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  return (
    <div className="Card">
      <div className="Top">
        {/* only visible on hover Name */}
        <NavLink to={`/detail/${props.id}/`}>
          <div className="HoverContent">{props.name}</div>
        </NavLink>
        <div className="Buttons">
          {/* conditional rendering of fav button */}
          {isFav ? (
            <button className="CloseCard" onClick={handleFavorite}>
              💚
            </button>
          ) : (
            <button className="CloseCard" onClick={handleFavorite}>
              🤍
            </button>
          )}

          {/* conditional rendering on the close button when placed on the /favorites route */}
          {props.isFavoritesRoute ? null : (
            <button
              className="CloseCard"
              onClick={() => props.onClose(props.id)}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {/* card information : character NAME + INFO BOX */}
      <div className="CardInfo">
        {/* nav link to the details/add style when hovering */}

        <NavLink to={`/detail/${props.id}/`}>
          <div className="Name">{props.name}</div>
        </NavLink>

        <div className="InfoBox">
          <h2 className="Status">▷ {props.status}</h2>
          <h2 className="Species">▷ {props.species}</h2>
          <h2 className="Gender">▷ {props.gender}</h2>
          <h2 className="Origin">▷ {props.origin?.name}</h2>
        </div>
        <img src={props?.image} alt="" className="img" />
      </div>
      {/* end card info----- */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

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
