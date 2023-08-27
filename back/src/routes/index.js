//hw3:
const router = require("express").Router();
const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postUser } = require("../controllers/postUser");
// i changed this to postUser because it makes it work hehe :)
const { postFav, deleteFav } = require("../controllers/postFav");
// const { deleteFav } = require("../controllers/deleteFav");

//ideally the responsability of the router is to route the request to the correct controller and give a response
//but in this case we the controller already gives a response
router.get("/login", login);
router.post("/login", postUser);
router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

//hw2:
// const { login } = require("../controllers/login");
// const { getCharById } = require("../controllers/getCharById");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
// const router = require("express").Router();

// router.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

// router.get("/login", (req, res) => {
//   login(req, res);
// });

// router.post("/fav", (req, res) => {
//   postFav(req, res);
// });

// router.delete("/fav/:id", (req, res) => {
//   deleteFav(req, res);
// });

//hw 1:
// const router = express.Router();
// router.get('/character/:id', getCharById);
// router.get('/login', login);
// router.post('/fav', postFav);
// router.delete('/fav/:id', deleteFav);

module.exports = router;

