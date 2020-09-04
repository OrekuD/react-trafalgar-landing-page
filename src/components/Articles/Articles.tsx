import React from "react";
import "./Articles.scss";
import laboratory from "../../assets/images/laboratory.png";
import herbal from "../../assets/images/herbal.png";
import facial from "../../assets/images/facial.png";
import { ArrowRight } from "../../svgs/Svg";
import image from "../../assets/images/element.png";

const articles = [
  {
    title: "Disease detection, check up in the laboratory",
    image: laboratory,
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    title: "Herbal medicines that are safe for consumption",
    image: herbal,
    description:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    title: "Natural care for healthy facial skin",
    image: facial,
    description:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

const blue = "#458FF6";

const Articles = () => (
  <div className="articles">
    <img src={image} alt="Bg" className="bg" />
    <p className="big-label">Check out our latest article</p>
    <div className="hr" />
    <div className="container">
      <div className="items">
        {articles.map(({ description, title, image }, index) => (
          <div className="article-wrapper" key={index}>
            <div className="article">
              <img src={image} alt={title} />
              <div className="content">
                <p className="title">{title}</p>
                <p className="small-label">{description}</p>
                <div className="row">
                  <p>Read more</p>
                  <ArrowRight size={20} color={blue} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <button className="btn">View all</button>
  </div>
);

export default Articles;
