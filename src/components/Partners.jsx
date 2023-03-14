import React from "react";

const Partners = ({ t }) => {
  return (
    <div id="partners">
      <div className="container">
        <div className="partners--row">
          <div className="partners--content">
            <div className="partners--topline">
              <div className="partners--list">
                <a href="https://www.power-heat-set.com/home.html">
                  Power Heat Set
                </a>
                <a href="https://www.gilbos.com/nl/">Gilbos</a>
                <a href="https://www.gilbos.com/nl/">SWISS</a>
              </div>
            </div>
            <h3 className="partners--title">{t.partners.title}</h3>
            <div className="partners--description">
              {t.partners.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="partners--cards">
            <div className="partners--card">
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
        </div>
      </div>
    </div>
  );
};

export default Partners;
