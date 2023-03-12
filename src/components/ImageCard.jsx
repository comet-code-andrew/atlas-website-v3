import React from "react";

const ImageCard = () => {
  return (
    <div className="image-card-group">
      <div className="image-card">
        <div className="partners--card_base-image">
          <img src="/phs.jpg" alt="" />
        </div>
        <div className="partners--card_logo-image">
          <img src="/phs-logo.png" alt="" />
        </div>
      </div>

      <div className="partners--card">
        <div className="partners--card_base-image">
          <img src="/gilbos-winder.jpg" alt="" />
        </div>
        <div className="partners--card_logo-image">
          <img src="/gilbos-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
