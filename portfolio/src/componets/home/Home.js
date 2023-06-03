import React from "react";
import "./Home.css";
import image from "../../assets/image.png";

const Home = () => {
  return (
    <div className="home" id="home">
    
        <div className="home-items">
        <div>
        <h1>Hey There, <span style={{color:"green"}}>I’am Mastan</span></h1>
        <p>I develop Beautifully simple things, And love what i do.</p>

        </div>
          <div className="homeimage">
          <img src={image} alt="" />
          </div>
        </div>    
    </div>
  );
};

export default Home;
