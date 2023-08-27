// const { Favorite } = require("../DB_connection");

// const postFav = async (req, res) => {
//   try {
//     //destructuring from req.body
//     const { id, name, status, species, gender, origin, image } = req.body;
//     //check that all the data we need comes from the body
//     if (!id || !name || !status || !species || !gender || !origin || !image)
//       return res.status(401).send("Missing data");
//     //find or create
//     await Favorite.findOrCreate({
//       where: {
//         id,
//         name,
//         status,
//         species,
//         gender,
//         origin,
//         image,
//       },
//     });
//     const allFavorites = await Favorite.findAll();
//     //return all favorites
//     return res.status(200).json(allFavorites);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };
// module.exports = { postFav };


let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  let { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};

