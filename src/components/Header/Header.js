import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <div className="header-logo">
        <img id="logo" src={logo} alt="" />
      </div>

      <nav className="nav ">
        <ul className="nav_links">
          <li className="nav_link">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/review">Order Review</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/inventory">Manage Inventory here</NavLink>
          </li>

          <li className="nav_link">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
