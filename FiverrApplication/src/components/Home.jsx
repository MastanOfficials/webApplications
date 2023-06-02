import React from "react";
import { cards } from "../data";
import CatCard from "./catcard/CatCard";
import Features from "./features/Features";
import Slide from "./slide/Slide";
import TrustedBy from "./trustedby/TrustedBy";
import "../components/catcard/CatCard.css"
import ColorPicker from "./ColorPicker";

const Home = () => {
  return (
    <div>
      <Features />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards?.map(cards => 
          <>
            <CatCard key={cards?.id} items={cards} />
          </>
        )}
      </Slide>
      <ColorPicker/>
    </div>
  );
};

export default Home;
