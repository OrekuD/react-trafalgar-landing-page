import React from "react";
import "./Services.scss";
import search from "../../assets/images/search.png";
import drug from "../../assets/images/drug.png";
import consultation from "../../assets/images/consultation.png";
import details from "../../assets/images/details.png";
import emergency from "../../assets/images/emergency.png";
import tracking from "../../assets/images/tracking.png";

const services = [
  {
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    image: search,
  },
  {
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system.",
    image: drug,
  },
  {
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    image: consultation,
  },
  {
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    image: details,
  },
  {
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    image: emergency,
  },
  {
    title: "Tracking",
    description: "Track and save your medical history and health data",
    image: tracking,
  },
];

const Services = () => (
  <div className="container">
    <div className="services">
      <p className="big-label">Our services</p>
      <div className="hr" />
      <p className="small-label">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="items">
        {services.map(({ description, image, title }, index) => (
          <div className="item" key={index}>
            <img src={image} alt={title} />
            <p className="title">{title}</p>
            <p className="small-label">{description}</p>
          </div>
        ))}
      </div>
      <button className="btn">Learn more</button>
    </div>
  </div>
);

export default Services;
