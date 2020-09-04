import React from "react";
import "./Banner.scss";
import illustration from "../../assets/images/illustration.png";

const Banner = () => (
  <div className="banner">
    <div className="content">
      <p className="title">Virtual healthcare for you</p>
      <p className="subtitle">
        Trafalgar provides progressive, and affordable healthcare, accessible on
        mobile and online for everyone
      </p>
      <button>
        <p>Consult today</p>
      </button>
    </div>
    <img src={illustration} alt="illustration" />
  </div>
);

export default Banner;
