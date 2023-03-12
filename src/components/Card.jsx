import React from "react";

const Card = ({ imgUrl, altText, title, subtitle, text }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imgUrl} alt={altText} />
      </div>
      <div className="content">
        <h5 className="title">{title}</h5>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
