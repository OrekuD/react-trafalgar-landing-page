import React from "react";
import "./Footer.scss";

const company = ["About", "Testimonials", "Find a doctor", "Apps"];
const region = ["Indonesia", "Singapore", "Hongkong", "Canada"];
const help = ["Help center", "Contact support", "Instructions", "How it works"];

const Footer = () => (
  <footer>
    <div className="section">
      <div className="logo-container">
        <div className="logo">
          <p>T</p>
        </div>
        <p className="logo-text" style={{ color: "white" }}>
          Trafalgar
        </p>
      </div>
      <div className="description">
        <p className="small-label" style={{ marginTop: 20 }}>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="small-label" style={{ marginTop: 40 }}>
          ©Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </div>
    </div>
    <div className="section">
      <p className="title">Links</p>
      {company.map((link, index) => (
        <p className="small-label" key={index}>
          {link}
        </p>
      ))}
    </div>
    <div className="section">
      <p className="title">Support</p>
      {region.map((link, index) => (
        <p className="small-label" key={index}>
          {link}
        </p>
      ))}
    </div>
    <div className="section">
      <p className="title">Links</p>
      {help.map((link, index) => (
        <p className="small-label" key={index}>
          {link}
        </p>
      ))}
    </div>
  </footer>
);

export default Footer;
