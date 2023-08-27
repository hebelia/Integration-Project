import React, { useState, useEffect } from "react";
import "./Favorites.css";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  //defining useDispatch
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  //cards reordering by filtering
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  // make conditional rendering of favorites
  // conditional rendering for all filters
  //COMPLETE REMOVE FAV
  // const [aux, setAux] = useState(false);
  // remove-favorites logic
  // const [favorites, setFavorites] = useState([]);
  // update the component state when myFavorites prop changes
  // useEffect(() => {
  //   setFavorites(myFavorites);
  // }, [myFavorites]);
  // const handleRemoveFavorite = (id) => {
  //   //NOTE: COMPLETE
  // };

  return (
    <div className="FavsTop">
      <h2> <span>♡</span> Favorites List <span>♡</span> </h2>
      <div className="Selectors">
        <select onChange={handleOrder}>
          <option value="A">△ Ascending</option>
          <option value="D">▽ Descending</option>
        </select>
        <select onChange={handleFilter}>
          <option value="allCharactersFav">◊ All</option>
          <option value="Male">◊ Male</option>
          <option value="Female">◊ Female</option>
          <option value="Genderless">◊ Genderless</option>
          <option value="unknown">◊ unknown</option>
        </select>
      </div>

      {/* ternary operator to determine whether to render the cards or the message  */}

      {myFavorites.length === 0 ? (
        <div className="NoFavoritesMessage">Oops... Looks like you have not added any favorites yet!</div>
      ) : (
        <div className="Cards">
          {
            //checks myFavorites is not null or undefined
            myFavorites.length &&
              myFavorites.map(
                (character) => (
                  console.log(character),
                  (
                    <Card
                      key={character.id}
                      id={character.id}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                      gender={character.gender}
                      origin={character.origin}
                      image={character.image}
                      onClose={character.onClose}
                      //to fix the onClose function issue i send a prop to the card which only exists when the component is on the Favorites page
                      isFavoritesRoute={true}
                    />
                  )
                )
              )
          }
        </div>
      )}
    </div>
  );
};

// redux connection
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
