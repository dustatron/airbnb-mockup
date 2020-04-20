import React from "react";
import logo from "../img/compass.png";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo" alt="logo" />where-bnb
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Host your home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Host an experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Help
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
