import React from "react";

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
    <section>
      <img src={img} alt="" />
      <h3 className="resturant-title" alt="Resturant picture">
        {name}
      </h3>
      <p>{renderCategories(categories)}</p>
      <span>{deliveryTime}</span>
      <span>{deliveryFee}</span>
    </section>
  );
};

export default ResturantCard;
