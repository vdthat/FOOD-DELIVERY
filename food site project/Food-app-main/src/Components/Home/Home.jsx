import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeTop">
        <h1>
          Welcome to <br />
          VA YA KWAGHYAN
        </h1>
        <p>TIV DISH COMBO</p>
      </div>

      <div className="homeMiddle">
        <Link className="aboutClick Link" to={"/about"}>
          ABOUT
        </Link>
        <Link className="menuClick Link" to={"/menu"}>
          MENU
        </Link>
      </div>
    </div>
  );
};

export default Home;
