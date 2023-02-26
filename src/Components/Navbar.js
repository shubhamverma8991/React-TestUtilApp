import React from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/about"}>
                  {" "}
                  About{" "}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile Section
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Work Experience
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Projects
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Education
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Certification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Extra Curricular Activity
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className={`mx-4 form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <label htmlFor="colorpicker">Color Picker: </label>
              <input type="color" id="colorpicker" value="#0000ff"></input>
            </div>
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.switch} />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
                {props.mode === "light" ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Pass a title prop",
};
