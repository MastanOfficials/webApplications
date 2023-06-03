import React from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-items1">
          <h1>
            <Link className="nav-link" to="/">
              Mastan Creations
            </Link>
          </h1>
        </div>
        <div className="nav-items2">
          <Link className="nav-link" to="#home" smooth>
            Home
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="#about" smooth>
            About Me
          </Link>
          <Link className="nav-link" to="#contact" smooth>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
