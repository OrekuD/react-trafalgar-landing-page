import React from "react";
import "./Offers.scss";
import healthcare from "../../assets/images/healthcare.png";
import mobile from "../../assets/images/mobile.png";

const items = [
  {
    title: "Leading healthcare providers",
    image: healthcare,
    description:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
  },
  {
    title: "Download our mobile apps",
    image: mobile,
    description:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
];

const Offers = () => (
  <div className="offers">
    {items.map(({ title, image, description }, index) => (
      <div className="item" key={index}>
        <div className="content">
          <p className="big-label">{title}</p>
          <div className="hr" />
          <p className="small-label">{description}</p>
          {index === 0 ? (
            <button className="btn">Learn more</button>
          ) : (
            <button className="btn">Download</button>
          )}
        </div>
        <img src={image} alt={title} />
      </div>
    ))}
  </div>
);

export default Offers;
