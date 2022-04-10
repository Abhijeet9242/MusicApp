import React from "react";
import styled from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styled.nav}>
      <ul>
        <li className={styled.musiclogo}>
          <img src={"/music3logo.png"} />
          <p>Music</p>
        </li>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
