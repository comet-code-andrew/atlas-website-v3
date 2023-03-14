import React from "react";
import Link from "next/link";

const Hero = ({ t }) => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero--row">
          <div className="hero--content">
            <div className="hero--topline">{t.hero.topLine}</div>
            <h1 className="hero--title">Atlas Kontrol Sistemleri</h1>
            <p className="hero--description">{t.hero.desc}</p>
            <Link href="/contact" className="hero--btn">
              {t.hero.btn}
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
