import React from "react";

import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";

import FooterStyles from "../../styles/HomeComponents/Footer.styles";

const ExtraPictures = () => {
  return (
    <FooterStyles>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
    </FooterStyles>
  );
};

export default ExtraPictures;
