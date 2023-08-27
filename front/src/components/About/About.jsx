import React from "react"; // import React when using JSX.
import "./About.css";

// import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="DetailContainer">
      <h2>▷ DETAILS ↴</h2>

      <div className="Detail">
        <NavLink to={`/home`}>
          <button className="CloseDetail"> ✕ </button>
        </NavLink>
        <img
          alt="about-image"
          src="/public/media/about-img.png"
          className="about-img"
        ></img>

        <div className="Info">
          <h2 className="name-text">
            <span>▻</span> Name: Hebe Lia Romeu{" "}
          </h2>
          <h2 className="about-text">
            Hi! My name is Hebe Lia Romeu and this is my first project developed
            with React. I have always been passionate about technology, that is
            why some time ago I made the decision to become a software
            developer. Something that always generated curiosity and motivation
            in me were the infinite possibilities when it comes to creating
            applications, tools, games with the help of programming that provide
            solutions and facilitate the work and life of millions of people
            ᕦ(ò_óˇ)ᕤ
          </h2>
        </div>
      </div>
    </div>
  );
}
export default About;

// About component on development...🔧⚒🛠🗜⚙🔩
// Hi! My name is Hebe Lia Romeu and this is my first project developed at Henry
// I have always been passionate
// about technology, that is why some time ago I made the decision to start
// the path to be a software developer. Something that always generated
// curiosity and motivation in me were the infinite possibilities when it
// comes to creating applications, tools, games with the help of programming
// that provide solutions and facilitate the work and life of millions of
// people.
{
  /* <h2 className="margin-h2">⋄ Status: Alive </h2>
<h2 className="margin-h2">⋄ Species: Human </h2>
<h2 className="margin-h2">⋄ Gender: Female </h2>

<h2 className="margin-h2">⋄ Origin: Earth (Replacement Dimension)</h2> */
}
