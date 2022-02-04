import React from "react";
import "./NavBar.css";
import searchIcon from "./search.png";

const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        Rancid<span className="green">Tomatillos</span>
      </div>
      <div className="search-bar">
        <input className="text-box" placeholder="Search Movies"></input>
        <button className="search-button"><img src={searchIcon} className="search-icon" alt="search" /></button>
        
      </div>
    </nav>
  );
};

export default NavBar;
