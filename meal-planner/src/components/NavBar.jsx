import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar row">
      <ul>
        <li>
          <NavLink to="/planner">Planner</NavLink>
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
