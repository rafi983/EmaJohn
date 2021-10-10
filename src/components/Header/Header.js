import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

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

          {user?.email ? (
            <li className="nav_link">
              <NavLink to="/login" onClick={logOut}>
                Logout
              </NavLink>
            </li>
          ) : (
            <li className="nav_link">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {user?.email && (
            <div className="user-info ms-auto me-3 text-white">
              Hello, {user.displayName}
              <img src={user.photoURL} className="user-img" alt="" />
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
