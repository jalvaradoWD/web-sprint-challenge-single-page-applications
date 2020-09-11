import { render } from "@testing-library/react";
import React from "react";

const ResturantCard = ({
  img,
  name,
  categories,
  deliveryTime,
  deliveryFee,
}) => {
  const renderCategories = (categories) => {
    const textContent = "";

    categories.forEach((category) => {
      textContent.push(`- ${category}`);
    });

    return `$ ${textContent}`;
  };

  return (
    <>
      <img src={img} alt="" />
      <h3 className="resturant-title" alt="Resturant picture">
        {name}
      </h3>
      <p>{renderCategories(categories)}</p>
      <span>20min - 30min</span>
      <span>$5.99 Delivery Fee</span>
    </>
  );
};

export default ResturantCard;
