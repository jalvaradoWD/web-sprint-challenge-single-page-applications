import React from "react";

import { Link } from "react-router-dom";

import ResturantCards from "./HomeComponents/ResturantCards";
import ExtraPicures from "./HomeComponents/ExtraPictures";

import HomeStyles from "../styles/HomeComponents/Home.styles";
import HeaderStyles from "../styles/HomeComponents/Header.styles";

const Home = () => {
  return (
    <HomeStyles>
      <HeaderStyles>
        <h1>Your favorite food, delivered while coding</h1>
        <Link to="/pizza">
          <button>Pizza?</button>
        </Link>
      </HeaderStyles>
      <main>
        <ResturantCards />
      </main>
      <ExtraPicures />
    </HomeStyles>
  );
};

export default Home;
