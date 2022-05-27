import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>
          VIET DEFI CRYPTO
        </h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/market">MARKET</Link>
          </li>
          <li className="nav-item">
            <Link to="/developer">Developers</Link>
          </li>
          <li className="nav-item">
            <Link to="/subscribe">Subscribe</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="btn" to="/">
             LOGIN
            </Link>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
