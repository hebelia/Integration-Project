import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
//
const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      //we copy all the state and to the property myFav we create a another copy of the state of myfav but with the addition from payload
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };
    case REMOVE_FAV:
      //use the filter property to instead remove the payload from the state
      return {
        ...state,
        myFavorites: [
          ...state.myFavorites.filter(
            (char) => char.id !== parseInt(action.payload)
          ),
        ],
      };

    case FILTER:
      const allCharactersFavFiltered = state.allCharactersFav.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharactersFav"
            ? [...state.allCharactersFav]
            : allCharactersFavFiltered,
      };

    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      const sortedFavorites =
        action.payload === "A"
          ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
          : allCharactersFavCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: sortedFavorites,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
