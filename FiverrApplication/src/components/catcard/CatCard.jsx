import React from "react";
import "./CatCard.css";
import { Link } from "react-router-dom";

const CatCard = ({ items }) => {
  console.log(items);
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={items?.img} alt="" />
        <span className="desc">{items?.desc}</span>
        <span className="title">{items?.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
