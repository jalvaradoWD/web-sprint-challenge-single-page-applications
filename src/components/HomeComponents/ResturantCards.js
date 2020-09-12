import React, { useState } from "react";
import ResturantDummyData from "../../dummyData/ResturantCards.dummy";

import ResturantCard from "./ResturantCard";
import ResturantCardsStyles from "../../styles/HomeComponents/ResturantCards.styles";

const ResturantCards = () => {
  const [resturantCards, setResturantCards] = useState(ResturantDummyData);

  return (
    <>
      <h2>Food Delivery in Gotham City</h2>
      <ResturantCardsStyles>
        {resturantCards.map((card) => (
          <ResturantCard {...card} />
        ))}
      </ResturantCardsStyles>
    </>
  );
};

export default ResturantCards;
