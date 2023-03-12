import React from "react";
import Card from "./Card";

const SectionCard = ({ cardsData }) => {
  return (
    <div className="section-card-group">
      {cardsData.map(({ id, imgUrl, altText, title, subtitle, text }) => (
        <Card
          key={id}
          imgUrl={imgUrl}
          altText={altText}
          title={title}
          subtitle={subtitle}
          text={text}
        />
      ))}
    </div>
  );
};

export default SectionCard;
