import React from "react";
import "./NavBar.css";
import searchIcon from "../../Images/search.png";

const NavBar = ({ onChange }) => {
  return (
    <nav className="navigation-bar">
      <h1 className="logo">
        Rancid<span className="green">Tomatillos</span>
      </h1>
      <div className="search-bar">
        <label for="search">Search Movies</label>
        <input
          id="search"
          type="text-box"
          className="text-box"
          placeholder="Search Movies"
          onChange={onChange}
        ></input>
        <button className="search-button">
          <img src={searchIcon} className="search-icon" alt="search-button" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
