const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, gender, species, origin, status } = (
      await axios.get(URL + parseInt(id))
    ).data;
    const character = {
      //parse the id
      id: +id,
      name,
      image,
      gender,
      species,
      origin,
      status,
    };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };
