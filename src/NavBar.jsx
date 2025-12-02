import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-heading">
        <img className="logo" src="logo.png" />
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
