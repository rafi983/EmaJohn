import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <div className="header-logo">
        <img id="logo" src={logo} alt="" />
      </div>

      <nav className="nav">
        <ul className="nav_links">
          <li className="nav_link">
            <a href="/#">Shop</a>
          </li>
          <li className="nav_link">
            <a href="/#">Order Review</a>
          </li>
          <li className="nav_link">
            <a href="/#">Manage Inventory here</a>
          </li>
        </ul>
      </nav>

      <div className="search-area">
        <input type="text" placeholder="type hero to search" />
      </div>
    </div>
  );
};

export default Header;
