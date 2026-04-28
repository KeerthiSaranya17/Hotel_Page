import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-heading">
        <img className="logo" src={logo} />
        <h1 className="hotel_name">Mystique Key</h1>
      </div>
      <div>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/About">
            <button>About</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
