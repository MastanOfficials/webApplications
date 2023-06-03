import React from "react";
import "./About.css";
import me from "../../assets/me.png";
import { useState } from "react";
import Resume from "../resume/Resume";
import close from "../../assets/close-removebg-preview.png";

const About = () => {
  const [displyresume, setDisplyresume] = useState(false);

  const handleclick = () => {
    setDisplyresume(!displyresume);
  };
  return (
    <>
      <div className="about" id="about">
        <div className="aboutme">
          <h1>ABOUT ME</h1>
        </div>
        <div className="about-items">
          <div>
            <img src={me} alt="" />
          </div>
          <div className="itmes1">
            <p>
              Experienced Front-End Developer with a focus on React.js, bringing
              2 years of expertise in crafting intuitive and visually appealing
              user interfaces. Proficient in JavaScript and passionate about
              leveraging React.js to build dynamic and interactive web
              applications. Proven ability to translate client requirements into
              elegant and efficient code. Committed to staying updated with the
              latest front-end development trends and continuously enhancing
              skills to deliver exceptional results.
            </p>
            <button className="about-btn" onClick={handleclick}>
              Resume
            </button>
          </div>
        </div>
      </div>
      <div>
        {displyresume && (
          <div className="popup">
            <img
              src={close}
              alt=""
              width="2%"
              height="3%"
              onClick={handleclick}
            />
            <Resume />
          </div>
        )}
      </div>
    </>
  );
};

export default About;
