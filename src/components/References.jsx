import React from "react";

const References = ({ t }) => {
  return (
    <div id="references">
      <div className="container">
        <div className="references--title">{t.references}</div>
        <div className="references--image_container">
          <img
            src="/kartal.png"
            alt="reference company logo"
            className="references--image"
          />
          <img
            src="/gulsan.png"
            alt="reference company logo"
            className="references--image"
          />
          <img
            src="/merinos.png"
            alt="reference company logo"
            className="references--image"
          />
          <img
            src="/kaplan.png"
            alt="reference company logo"
            className="references--image"
          />
        </div>
      </div>
    </div>
  );
};

export default References;
