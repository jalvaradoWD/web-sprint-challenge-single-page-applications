import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1>Lambda Eats</h1>
      <nav>
        <Link>
          <span>Home</span>
        </Link>
        <Link>
          <span>Help</span>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
