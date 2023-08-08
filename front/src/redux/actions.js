export const ADD_FAV = "ADD_FAV";

export const REMOVE_FAV = "REMOVE_FAV";

export const FILTER = "FILTER";

export const ORDER = "ORDER";

//every action is an object with type and payload properties
export const addFavorite = (character) => {
  return { type: ADD_FAV, payload: character };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
