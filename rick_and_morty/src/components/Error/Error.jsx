//import css

// haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "/home" y "/about", y el usuario en el navegador escribe y "/henry", debería mostrar el componente Error 404.
import "./Error.css";

import React from "react"; // import React when using JSX.


// import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function Error() {
  return <div> ERROR PAGE </div>;
}
export default Error;