import "./Header.css";
import { Outlet, Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <div className="headerWrapper">
      <h1>VA YA KWAGHYAN</h1>
      <div className="links">
        <ul>
          <li>
            <Link className="homeClick Link" to={"/about"}>
              ABOUT
            </Link>
          </li>
          <li>
            {" "}
            <Link className="menuClick Link" to={"/"}>
              HOME
            </Link>
          </li>
          <li>
            <Link className="loginClick Link" to={"/login"}>
              LOGIN
            </Link>
          </li>
          <li>
            <Link className="cartClick Link" to={"#"}>
              CART
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
