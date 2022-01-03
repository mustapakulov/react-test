import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <ul className="linkNavbar">
        <a href="">
          <img
            width="80px"
            height="40px"
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
            alt=""
          />
        </a>
        <li>contact</li>
        <li>setting</li>
        <li>about</li>
      </ul>
    </div>
  );
};

export default Navbar;
