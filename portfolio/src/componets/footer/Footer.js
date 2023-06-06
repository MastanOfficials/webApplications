import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebookicon1.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkdin from "../../assets/linkdin.png";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <div className="footer-item">
            <h1>MastanCreation </h1>
          </div>

          <div className="footer-items">
            <Link className="nav-link" to="#home" smooth>
              {" "}
              <span>Home</span> 
            </Link>
            <Link className="nav-link" to="#projects" smooth>
              <span>Projects</span>
            </Link>
            <Link className="nav-link" to="#about" smooth>
              <span>About Me</span>
            </Link>
            <Link className="nav-link" to="#contact" smooth>
              <span>Contact Me</span>
            </Link>
          </div>
          <div className="footer-icons">
            <img src={facebook} alt="" width="50px" height="50px" />
            <img src={twitter} alt="" width="50px" height="50px" />
            <img src={insta} alt="" width="40px" height="40px" />
            <img src={linkdin} alt="" width="40px" height="40px" />
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p className="footer-rights">
          © 2023 <span> Mastan</span> All Rights Reserved , Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
