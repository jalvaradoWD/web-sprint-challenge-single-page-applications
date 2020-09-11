import React from "react";
import ResturantCards from "./HomeComponents/ResturantCards";

const Home = () => {
  return (
    <>
      <header>
        <h1>Your favorite food, deliveres while coding</h1>
        <button>Pizza?</button>
      </header>
      <main>
        <ResturantCards />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
