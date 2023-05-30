import React from "react";

import "./Slide.css";
import Slider from "infinite-react-carousel";


const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className="slider">
      <div className="container">
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {children}
        </Slider>
       
      </div>
    </div>
  );
};

export default Slide;
