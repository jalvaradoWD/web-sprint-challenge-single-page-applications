import React, { useState } from "react";
import ResturantDummyData from "../../dummyData/ResturantCards.dummy";
import ResturantCard from "./ResturantCard";

const ResturantCards = () => {
  const [resturantCards, setResturantCards] = useState(ResturantDummyData);

  return (
    <>
      {resturantCards.map((card) => (
        <ResturantCard {...card} />
      ))}
    </>
  );
};

export default ResturantCards;
