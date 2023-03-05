import React from "react";

const SectionCard = ({ imgUrl, altText, title, subtitle, text }) => {
  return (
    <div className="section--card">
      <div className="card--logo">
        <img src={imgUrl} alt={altText} />
      </div>
      <div className="card--content">
        <h5 className="card--title">{title}</h5>
        <div className="card--subtitle">{subtitle}</div>
        <div className="card--text">{text}</div>
      </div>
    </div>
  );
};

export default SectionCard;
