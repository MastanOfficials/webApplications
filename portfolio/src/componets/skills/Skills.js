import React from "react";
import "./Skills.css";
import skills from "../../assets/skillsicons.png";

const Skills = () => {
  return (
    <div>
      <div className="SKILLS">
        <h1>SKILLS</h1>
      </div>
      <div className="skill">
        <div className="skills">
          <div className="mainskills">
            <div title="8 out of 10">
              <span className="skill-items">HTML</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="8"
                className="range-slider"
              />
            </div>
            <div title="7 out of 10">
              <span className="skill-items">CSS</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="7"
                className="range-slider"
              />
            </div>
            <div title="9 out of 10">
              <span className="skill-items">JavaScript</span>
              <br />
              <input
                type="range"
                min="0"
                max="10"
                value="9"
                className="range-slider"
              />
            </div>
            <div title="9 out of 10">
              <span className="skill-items">ReactJs</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="9"
                className="range-slider"
              />
            </div>
          </div>
          <div className="mainskills">
            <div title="8 out of 10">
              <span className="skill-items">Bootstrap</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="8"
                className="range-slider"
              />
            </div>
            <div title="7 out of 10">
              <span className="skill-items">Git</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="7"
                className="range-slider"
              />
            </div>
            <div title="6 out of 10">
              <span className="skill-items">AWS GIT</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="6"
                className="range-slider"
              />
            </div>
            <div title="7 out of 10">
              <span className="skill-items">Cypress</span>
              <br />

              <input
                type="range"
                min="0"
                max="10"
                value="7"
                className="range-slider"
              />
            </div>
           
          </div>
        </div>
        <div className="skillsimage">
          <img
            src={skills}
            alt=""
            width="600px"
            height="300px"
            className="skillsimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
