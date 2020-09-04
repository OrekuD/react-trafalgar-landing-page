import React, { useState } from "react";
import "./Testimonial.scss";
import profile from "../../assets/images/profile-image.png";
import greypattern from "../../assets/images/pattern-grey.png";
import pattern from "../../assets/images/pattern.png";
import { ArrowLeft, ArrowRight } from "../../svgs/Svg";

const reviews = [
  {
    name: "Edward Newgate",
    role: "Founder Circle",
    image: profile,
    review:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    name: "Nelson Benson",
    role: "Legon, Accra",
    image: profile,
    review:
      "Commodo aliquip magna quis duis occaecat sit amet excepteur laboris reprehenderit Lorem dolore non deserunt. Adipisicing proident sunt deserunt dolore magna incididunt consequat.",
  },
  {
    name: "David Podolski",
    role: "Tema",
    image: profile,
    review:
      "Adipisicing proident sunt deserunt dolore magna incididunt consequat. Sit est et commodo nulla elit.",
  },
];

const lightblue = "#B4D1FB";
const blue = "#458FF6";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="testimonial">
      <div className="card">
        <img src={greypattern} alt="Pattern" className="top-pattern" />
        <img src={pattern} alt="Pattern" className="bottom-pattern" />
        <p className="big-label">What our customers are saying</p>
        <div className="hr" />
        <div className="review">
          <img src={profile} alt="Profile Image" />
          <div>
            <p className="name">{reviews[activeIndex].name}</p>
            <p className="small-label">{reviews[activeIndex].role}</p>
          </div>
          <p className="small-label">“{reviews[activeIndex].review}”</p>
        </div>
      </div>
      <div className="active-review-indicator">
        <button
          className="svg"
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? reviews.length - 1 : activeIndex - 1
            )
          }
        >
          <ArrowLeft size={22} color={blue} />
        </button>
        {reviews.map((_, index) => (
          <div
            className="indicator"
            style={{
              backgroundColor: activeIndex === index ? blue : lightblue,
            }}
          />
        ))}
        <button
          className="svg"
          onClick={() =>
            setActiveIndex(
              activeIndex === reviews.length - 1 ? 0 : activeIndex + 1
            )
          }
        >
          <ArrowRight size={22} color={blue} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
