import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import ConnectWallet from "../connectwallet/ConnectWallet";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openW, setOpenW] = useState(false);
  const handleOpenW = () => {
    if (openW === false) {
      setOpenW(true);
    } else {
      setOpenW(false);
    }
  };
  return (
    <>
      <header>
        <div className="logo">
          <img src="/assets/Group.svg" alt="metabnb logo" />
        </div>

        <nav
          data-visible={openMenu}
          className={`nav_content ${openMenu ? "visible" : ""}`}
        >
          <ul className="nav_list">
            <li className="nav_link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav_link">
              <NavLink to="/placetostay"> Place to stay</NavLink>
            </li>
            <li className="nav_link">NFTs</li>
            <li className="nav_link">Community</li>
          </ul>
          <button className="connect" onClick={handleOpenW}>
            Connect Wallet
          </button>
        </nav>

        <button
          className="mobile_navigation"
          aria-label={!openMenu ? "open menu" : "close menu"}
          onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
        >
          menu
        </button>
      </header>
      <ConnectWallet handleOpenW={handleOpenW} openW={openW} />
    </>
  );
}
