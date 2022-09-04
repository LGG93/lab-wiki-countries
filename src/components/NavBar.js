import React from "react";
import { Link, NavLink } from "react-router-dom";

/* <Link> --> Attach clickable links to different pages. */
/* <NavLink> --> special version of <Link> that adds styling attributes. */
const NavBar = () => {
  return (
    <nav className="navbar is-spaced is-light">
      <div className="navbar-menu is-active" id="navbarBasicExample">
        <div className="navbar-end">
          LAB - WikiCountries
          <NavLink
            className="navbar-item"
            activeStyle={{ color: "red" }}
            to="/"
          >
            Home
          </NavLink>

          <Link className="navbar-item" to="/CountriesList">
            Countries List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;