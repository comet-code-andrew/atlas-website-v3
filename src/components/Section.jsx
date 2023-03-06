import React from "react";
import SectionCard from "./SectionCard";

const Section = ({ sectionId, children }) => {
  return (
    <div id={sectionId}>
      <div className="container">
        <div className="section--row">
          <div className="section--content">
            <div className="section--topline">
              Helping Businesses Become Efficient
            </div>
            <div className="section--title">About Us</div>
            <div className="section--description">
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
          {children}
          {/* <div className="section--cards-container">
            <SectionCard
              imgUrl={
                "https://media.licdn.com/dms/image/C4E03AQGIQvHuF8yPZQ/profile-displayphoto-shrink_800_800/0/1639654187897?e=1683763200&v=beta&t=0pYbvAwDTJRMcndHjEZpdCl7FOuRuJ7JIRI_6FzZMU4"
              }
              altText={"logo"}
              title={"Ali Tas"}
              subtitle={"Manager"}
              text={"Some Cool Text Here"}
            />
            <SectionCard
              imgUrl={
                "https://media.licdn.com/dms/image/C4E03AQGIQvHuF8yPZQ/profile-displayphoto-shrink_800_800/0/1639654187897?e=1683763200&v=beta&t=0pYbvAwDTJRMcndHjEZpdCl7FOuRuJ7JIRI_6FzZMU4"
              }
              altText={"logo"}
              title={"Ali Tas"}
              subtitle={"Manager"}
              text={"Some Cool Text Here"}
            />
            <SectionCard
              imgUrl={
                "https://media.licdn.com/dms/image/C4E03AQGIQvHuF8yPZQ/profile-displayphoto-shrink_800_800/0/1639654187897?e=1683763200&v=beta&t=0pYbvAwDTJRMcndHjEZpdCl7FOuRuJ7JIRI_6FzZMU4"
              }
              altText={"logo"}
              title={"Ali Tas"}
              subtitle={"Manager"}
              text={"Some Cool Text Here"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section;
