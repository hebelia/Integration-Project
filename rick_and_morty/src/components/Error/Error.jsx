
import "./Error.css";
import { useParams , useNavigate,  NavLink } from "react-router-dom";
import React, { useEffect } from "react"; // import React when using JSX.
// import SearchBar from "../SearchBar/SearchBar";



const Error = () => {
  // Get the current path using useParams
  const { "*": path } = useParams();
  // Navigate back to the root path if the path is not found
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The path "{path}" is not a valid route.</p>
    </div>
  );
};

export default Error;