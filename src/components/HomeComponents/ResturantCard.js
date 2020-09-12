import React from "react";

import CardStyles from "../../styles/HomeComponents/ResturantCard.styles";

const ResturantCard = ({
  img,
  name,
  categories,
  deliveryTime,
  deliveryFee,
}) => {
  const renderCategories = (categories) => {
    return `$ - ${categories.join(" - ")}`;
  };

  return (
    <CardStyles>
      <img src={img} alt="" />
      <h3 className="resturant-title" alt="Resturant picture">
        {name}
      </h3>
      <p>{renderCategories(categories)}</p>
      <span>{deliveryTime}</span>
      <span>{deliveryFee}</span>
    </CardStyles>
  );
};

export default ResturantCard;
