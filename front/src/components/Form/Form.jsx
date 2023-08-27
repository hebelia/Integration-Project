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
    <div className="form-container">
      
      <form className="form">
        {/* Your form inputs and elements go here */}
        <label htmlFor="email">Email </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {/* error handling */}
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}
  
        <br />
  
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {/* error handling */}
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
  
        <br />
  
        <button className="SubmitLogin" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
      <img src="/public/media/login-img2.png"></img>
    </div>
  );
}
export default Form;


