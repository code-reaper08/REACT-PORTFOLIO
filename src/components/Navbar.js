import React from "react";
import { Link, withRouter } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="brandlogo"
              src="https://image.flaticon.com/icons/png/512/1159/1159385.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                  
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                  {/* <span class="sr-only">(current)</span> */}
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/socials" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/socials">
                  Socials
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/skills" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
