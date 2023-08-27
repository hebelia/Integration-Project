const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    //destructuring the id we receive from the params
    const { id } = req.params;
    //destroy method from sequelize
    await Favorite.destroy({
      where: {
        id,
      },
    });
    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { deleteFav };
