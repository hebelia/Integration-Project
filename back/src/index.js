//database connection
const { conn } = require("./DB_connection");
//extra modularization so that an infinite loop is not generated with the tests
const server = require("./app");
//define const in which the sv will be raised ...
// conventionally server is on 3001
const PORT = 3001;

//database connection sync
conn.sync({ fonce: true }).then(() => {
  //listen
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});

// const http = require("http");
// // const characters = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);

//       getCharById(res, +id);

//       // let characterFiltered = characters.filter(
//       //   (char) => char.id === parseInt(id)
//       // );
//       // res
//       //   .writeHead(200, { "Content-Type": "application/json" })
//       //   .end(JSON.stringify(characterFiltered));
//     }
//   })
//   .listen(3001, "localhost");
