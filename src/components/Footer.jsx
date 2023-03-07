import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer--row">
          <div className="footer--col">
            <h5 className="footer--title">Atlas Kontrol Sistemleri</h5>
          </div>
          <div className="footer--col">
            <div className="footer--contact">
              <a href="mailto:info@atlaskonsis.com" className="footer--email">
                info@atlaskonsis.com
              </a>
              <a href="tel:+903423378153" className="footer--phone">
                +90 342 337 81 53
              </a>
              <p className="footer--phone">+90 342 337 81 54 (fax)</p>
            </div>
            <p className="footer--address">
              3. Organize Sanayi Bölgesi Celal Doğan Bulvarı No:71 Yeni Sosyal
              Tesisler D-Blok No 18 Başpınar Gaziantep Türkiye
            </p>
          </div>
        </div>
        <div className="footer--trademark">Atlas Kontrol Sistemleri - 2023</div>
      </div>
    </div>
  );
};

export default Footer;
