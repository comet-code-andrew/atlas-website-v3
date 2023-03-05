import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero--row">
          <div className="hero--content">
            <div className="hero--topline">Your Technical Business Partner</div>
            <h1 className="hero--title">Atlas Kontrol Sistemleri</h1>
            <p className="hero--description">
              End-to-end solutions with 20+ years hands on experince in
              machinery, troubleshooting, spare supply and more
            </p>
            <Link href="/contact" className="hero--btn">
              Get In Touch
            </Link>
          </div>
          <div className="hero--image">
            <img src="/hero-image.png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
