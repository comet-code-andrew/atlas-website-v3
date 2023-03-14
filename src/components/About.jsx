import React from "react";

const About = ({ t }) => {
  return (
    <div id="about">
      <div className="container">
        <div className="about--row">
          <div className="about--content">
            <div className="about--topline">{t.about.topLine}</div>
            <h2 className="about--title">{t.about.title}</h2>
            <div className="about--description">
              {t.about.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="about--testimonials">
            {t.about.cards.map((item, index) => (
              <div key={index} className="about--testimonial_card">
                <div className="testimonial--profileLogo">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="testimonial--content">
                  <h5 className="testinomial--name">{item.name}</h5>
                  <div className="testimonial--jobTitle">{item.jobTitle}</div>
                  <div className="testimonial--text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
