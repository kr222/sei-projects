import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* don't use anchor tags in react, use Link, import {Link}, and use to="" */}
          <NavLink
            // className={(navData) => (navData.isActive ? styles.active : "")}
            to="/planner"
          >
            Planner
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={(navData) => (navData.isActive ? styles.active : "")}
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
