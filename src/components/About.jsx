import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about--row">
          <div className="about--content">
            <div className="about--topline">
              Helping Businesses Become Efficient
            </div>
            <div className="about--title">About Us</div>
            <div className="about--description">
              <p>
                With years of experience in the industry, we have established
                ourselves as a trusted partner for our customers, providing them
                with the highest quality spare parts and technical support
                services.
              </p>
              <p>
                We understand downtime can have a significant impact on your
                production, which is why we offer a comprehensive range of spare
                parts that are readily available to ensure minimal disruption to
                your operations.
              </p>
              <p>
                Our team of highly skilled technicians are also on hand to
                provide technical support, assisting you with any issues that
                may arise and helping you to optimize your production processes.
              </p>
            </div>
          </div>
          <div className="about--testimonials">
            <div className="about--testimonial_card">
              <div className="testimonial--profileLogo">
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQGIQvHuF8yPZQ/profile-displayphoto-shrink_800_800/0/1639654187897?e=1683763200&v=beta&t=0pYbvAwDTJRMcndHjEZpdCl7FOuRuJ7JIRI_6FzZMU4"
                  alt=""
                />
              </div>
              <div className="testimonial--content">
                <h5 className="testinomial--name">Emre Gercek</h5>
                <div className="testimonial--jobTitle">
                  Technical Support Manager
                </div>
                <div className="testimonial--text">
                  Our experience can help you for preventive maintenance
                </div>
              </div>
            </div>
            <div className="about--testimonial_card">
              <div className="testimonial--profileLogo">
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQEvrIKEz7x-Vg/profile-displayphoto-shrink_800_800/0/1657516193850?e=1683763200&v=beta&t=mCZOkqqGrmhVuCqS245Yk8beMZGCNuDpdaAcPA30GvM"
                  alt=""
                />
              </div>
              <div className="testimonial--content">
                <h5 className="testinomial--name">Osman Birelli</h5>
                <div className="testimonial--jobTitle">
                  Technical Support Specialist
                </div>
                <div className="testimonial--text">
                  Maintenance has crucial benefits on long term spare parts
                  lifetime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
