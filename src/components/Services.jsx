import React from "react";

const Services = ({ t }) => {
  return (
    <div id="services">
      <div className="container">
        <div className="services--row">
          <div className="services--col">
            <h2 className="services--title">{t.services.title}</h2>
            <div className="services--description">{t.services.desc}</div>
          </div>
          <div className="services--col">
            <div className="services--card-group">
              {t.services.cards.map((card, index) => (
                <div key={index} className="services--card">
                  <div className="services--card-img">
                    <img src={card.imgUrl} alt="" />
                  </div>
                  <div className="services--card-title">{card.title}</div>
                  <div className="services--card-description">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
