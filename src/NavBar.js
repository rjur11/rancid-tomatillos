import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        Rancid<span className="green">Tomatillos</span>
      </div>
      <div className="search-bar">
        <input className="text-box" placeholder="Search Movies"></input>
        <button className="search-button">🔎</button>
      </div>
    </nav>
  );
};

export default NavBar;
