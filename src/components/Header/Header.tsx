import React from "react";
import "./Header.scss";

const links = ["Home", "Find a doctor", "Apps", "Testimonials", "About us"];

const Header = () => (
  <header>
    <div className="logo-container">
      <div className="logo">
        <p>T</p>
      </div>
      <p className="logo-text">Trafalgar</p>
    </div>
    <div className="links">
      {links.map((link, index) => (
        <p className="link" key={index}>
          {link}
        </p>
      ))}
    </div>
  </header>
);

export default Header;
