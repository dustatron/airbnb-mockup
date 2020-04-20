import React from "react";
import Involvement from "./Involvement";

function Menu() {
  return (
    <React.Fragment>
      <ul className="menu-links--list">
        <li className="menu-links--items underline">
          <a href="/">Places to stay</a>
        </li>
        <li className="menu-links--items">
          <a href="/">Monthly stays</a>
        </li>
        <li className="menu-links--items">
          <a href="/">Experiences</a>
        </li>
        <li className="menu-links--items">
          <a href="/">Online Experiences</a>
        </li>
      </ul>
      <div className="menu">
        <div className="menu-box">
          <span className="title"> Location </span>
          <p> Find things by location </p>
        </div>
        <div className="menu-box menu-box--middle">
          <span className="title"> Check in / Check out </span>
          <p> Find things by location </p>
        </div>
        <div className="menu-box">
          <div className="menu-box--search">
            <button className="btn btn-danger"> search </button>
          </div>
          <span className="title"> Guests </span>
          <p> Find things by location </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Menu;
