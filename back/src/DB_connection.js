require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  // URL
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,

  { logging: false, native: false }
);

//executing the models function
FavoriteModel(sequelize);
UserModel(sequelize);

//destructuring of the models from sequelize
const { User, Favorite } = sequelize.models;
//making relationship between the models
User.belongsToMany(Favorite, { through: "user_favorite", timestamps: false });
Favorite.belongsToMany(User, { through: "user_favorite", timestamps: false });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
