import { GiHamburgerMenu } from "react-icons/gi";
import { useRef,useEffect, useState } from "react";

import "./Header.css";

const Header = ({ onMenuOpen }) => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="topbar">
        {/* Left Branding */}
        <div className="topbar-left">
          <img
            src="/assets/icons/film_logo.webp"
            alt="College Logo"
            className="film-logo"
          />

          <div className="topbar-content">
            <h1 className="main-title">School Of  <br/>Film & Television</h1>
          </div>
        </div>

        <div className="right-logos">
              <img
            src="/assets/icons/mit_logo.webp"
            alt="College Logo"
            className="mit-logo"
          />
             <img
            src="/assets/icons/naac.png"
            alt="College Logo"
            className="naac-logo"
          />
        </div>

        {/* Hamburger */}
        <button className="menu-btn" onClick={onMenuOpen}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
