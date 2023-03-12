import React from "react";

const SectionImage = ({ imageUrl }) => {
  return (
    <div className="image">
      <img src={imageUrl} alt="hero" />
    </div>
  );
};

export default SectionImage;
