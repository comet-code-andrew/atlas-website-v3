import React from "react";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <div className="services--row">
          <div className="services--col">
            <h2 className="services--title">Services</h2>
            <div className="services--description">
              We are committed to providing our clients with the best possible
              service. We pride ourselves on our attention to detail, our
              commitment to quality, and our dedication to customer
              satisfaction.
            </div>
          </div>
          <div className="services--col">
            <div className="services--card-group">
              <div className="services--card">
                <div className="services--card-img">
                  <img src="/technical-support.jpg" alt="" />
                </div>
                <div className="services--card-title">Technical Support</div>
                <div className="services--card-description">
                  Our team of expert technicians is always here to help you
                  solve any technical issues you may encounter. Whether you need
                  help troubleshooting a problem or require assistance with a
                  software upgrade, we are always available to provide
                  comprehensive technical support to keep your operations
                  running smoothly.
                </div>
              </div>
              <div className="services--card">
                <div className="services--card-img">
                  <img src="/spare-parts.jpg" alt="" />
                </div>
                <div className="services--card-title">Spare Parts</div>
                <div className="services--card-description">
                  We understand the importance of having your machines operating
                  at their best, which is why we offer a wide range of
                  high-quality spare parts to help you keep your equipment
                  running smoothly. From belts and bearings to motors and pumps,
                  we have everything you need to keep your business running
                  smoothly.
                </div>
              </div>
              <div className="services--card">
                <div className="services--card-img">
                  <img src="/installation.jpg" alt="" />
                </div>
                <div className="services--card-title">Machine Installation</div>
                <div className="services--card-description">
                  Our team of experienced professionals has years of experience
                  in installing and setting up machines for various industries.
                  We offer comprehensive machine installation services to ensure
                  that your equipment is installed correctly and operates
                  efficiently from day one.
                </div>
              </div>
              <div className="services--card">
                <div className="services--card-img">
                  <img src="/consultancy.jpg" alt="" />
                </div>
                <div className="services--card-title">Consultancy</div>
                <div className="services--card-description">
                  Our experienced consultants work closely with you to analyze
                  your business operations, identify areas for improvement, and
                  develop customized strategies to help you achieve your goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
