import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src="/assets/Group.svg" alt="metabnb logo" />
      </div>

      <nav
        data-visible={openMenu}
        className={`nav_content ${openMenu ? "visible" : ""}`}
      >
        <ul>
          <li className="nav_link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav_link">
            <NavLink to="/placetostay"> Place to stay</NavLink>
          </li>
          <li className="nav_link">NFTs</li>
          <li className="nav_link">Community</li>
        </ul>
        <button className="connect">Connect Wallet</button>
      </nav>

      <button
        className="mobile_navigation"
        aria-label={!openMenu ? "open menu" : "close menu"}
        onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
      >
        menu
      </button>
    </header>
  );
}
