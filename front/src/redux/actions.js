// import { URL } from "../components/Config/constants";
import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//every action is an object with type and payload properties
// export const addFavorite = (character) => {
//   return { type: ADD_FAV, payload: character };
// };
export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// previo
// export const addFavorite = (character) => {
//   try {
//     const endpoint = "http://localhost:3001/rickandmorty/fav";
//     return async (dispatch) => {
//       const { data } = await axios.post(endpoint, character);
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     };
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// // export const removeFavorite = (id) => {
// //   return { type: REMOVE_FAV, payload: id };
// // };
// export const removeFavorite = (id) => {
//   try {
//     const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
//     return async (dispatch) => {
//       const { data } = await axios.delete(endpoint);
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       });
//     };
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
