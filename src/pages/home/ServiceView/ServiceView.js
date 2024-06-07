import React from 'react';
import "./ServiceView.css";

const ServiceView = ({ imageUrl, title, description }) => {
  return (
    <div className="service-view">
      <div className="left-image">
        <img src={imageUrl} alt="Service" />
      </div>
      <div className="right-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceView;
