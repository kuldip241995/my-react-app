import React from "react";
import "./QuickView.css";
import images from "../../../assets/images";

const QuickView = () => {
  return (
    <div className="quick-view">
      <div className="quick-view-left">
        <h1 style={{ color: "#FF6000" }}>
          Quick <span style={{ color: "#2A2A2A" }}>and</span> Tasty
          <br />
          Food Delivered <span style={{ color: "#2A2A2A" }}>with</span> a<br />
          Dash of <span style={{ color: "#2A2A2A" }}>Speed</span>
        </h1>
        <div className="button-container">
          <button className="order-button">Order Now</button>
        </div>
        <button className="track-button">Track Order</button>
      </div>
      <div className="quick-view-right">
        <img
          src={images.imgHomeHeaderDish}
          alt="Delicious Food"
          className="quick-view-image"
        />
      </div>
    </div>
  );
};

export default QuickView;
