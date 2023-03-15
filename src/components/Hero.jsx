import React from "react";
import Link from "next/link";
import {useContext} from "react";
import {LocaleContext} from "@/contexts/locale.context";

const Hero = () => {
  const { currentLocale } = useContext(LocaleContext)
  console.log("Hero: ", currentLocale)
  return (
    <div id="hero">
      <div className="container">
        <div className="hero--row">
          <div className="hero--content">
            <div className="hero--topline">{currentLocale.hero.topLine}</div>
            <h1 className="hero--title">Atlas Kontrol Sistemleri</h1>
            <p className="hero--description">{currentLocale.hero.desc}</p>
            <Link href="/contact" className="hero--btn">
              {currentLocale.hero.btn}
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
