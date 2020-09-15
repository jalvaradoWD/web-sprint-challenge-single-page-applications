import React from "react";

import NavbarStyles from "../styles/NavBar/Navbar.styles";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavbarStyles>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/pizza">
          <span>Order Now!</span>
        </Link>
      </nav>
    </NavbarStyles>
  );
};

export default NavBar;
