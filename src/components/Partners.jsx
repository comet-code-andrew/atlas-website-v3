import React from "react";

const Partners = () => {
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
            <div className="partners--title">Our Partners</div>
            <div className="partners--description">
              <p>
                Europes leading textile machine manufacturers for thermofixation
                and winding
              </p>
              {/* <div className="partners--list">
                <span>Power Heat Set</span>
                <span>Gilbos</span>
                <span>SWISS</span>
              </div> */}
              <p>
                We have partnered with market leaders in the industry to deliver
                the highest quality products to our customers. Our machines are
                designed with precision engineering and attention to detail to
                ensure optimal performance and efficiency.
              </p>
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
