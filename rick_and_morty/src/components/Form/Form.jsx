// pasarle login a form
import "./Form.css";
import React from "react"; // import React when using JSX.

import { NavLink } from "react-router-dom";
import { useState } from "react";
import validation from "../Config/validation";

function Form({ login }) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    console.log(userData);
  };

  return (
    <form>
      <label htmlFor="">Email: </label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.e1 ? (
        <p>{errors.e1}</p>
      ) : errors.e2 ? (
        <p>{errors.e2}</p>
      ) : (
        <p>{errors.e3}</p>
      )}

      <br />

      <label htmlFor="">Password:</label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}

      <br />
      <button className="SubmitLogin" onClick={handleSubmit}>
        SUBMIT
      </button>
    </form>
  );
}
export default Form;
