import React from "react";
import HeaderQuotes from "./HeaderQuotes";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <HeaderQuotes />
        <div className="header-cta">
          <h1>End of excuses</h1>
          <a href="tel:+1234567890">
            <button className="btn">Contact us</button>
          </a>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
