import React from "react";
import "./Features.css";
import search from "../../assets/img/search.png";
import man from "../../assets/img/man.png";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h1>Find the Perfect <i>Freelancer</i> services for your business</h1>
          <div className="search">
            <div className="serachInput">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="Try to build a react application"
              />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span>Popular :</span>
            <button>Web Design</button>
            <button>Word press</button>
            <button>React Developer</button>
            <button>Developer</button>
          </div>
        </div>
        <div className="right">
          <img src={man} alt="" width="400px" height="500px" />
        </div>
      </div>
    </div>
  );
};

export default Features;
