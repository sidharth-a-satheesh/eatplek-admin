import React, { useState } from "react";
import "./food.scss";
// import image from "../../assets/food.png";
const Food = ({ name, cost, description, imgPath }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <div className="food-details-main">
      <div className="food-img-main">
        <img className="food-image" src={imgPath} alt="" />
      </div>
      <div className="food-name-main">
        <div className="food-name">{name}</div>
        <div style={{ color: "navy" }}>Rs. {cost}</div>
      </div>
      <div className="food-description">
        {readMore ? description : description.substring(0, 45) + "..."}
      </div>
      <button className="read-more-btn" onClick={toggleBtn}>
        {readMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Food;
