import React, { useState } from "react";
import ResturantDummyData from "../../dummyData/ResturantCards.dummy";
import ResturantCard from "./ResturantCard";

const ResturantCards = () => {
  const [resturantCards, setResturantCards] = useState(ResturantDummyData);

  return (
    <>
      <h2>Food Delivery in Gotham City</h2>
      {resturantCards.map((card) => (
        <ResturantCard {...card} />
      ))}
    </>
  );
};

export default ResturantCards;
