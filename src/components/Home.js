import React from "react";
import ResturantCards from "./HomeComponents/ResturantCards";

import ExtraPicures from "./HomeComponents/ExtraPictures";

import HomeStyles from "../styles/HomeComponents/Home.styles";

const Home = () => {
  return (
    <HomeStyles>
      <header>
        <h1>Your favorite food, deliveres while coding</h1>
        <button>Pizza?</button>
      </header>
      <main>
        <ResturantCards />
      </main>
      <footer>
        <ExtraPicures />
      </footer>
    </HomeStyles>
  );
};

export default Home;
