import React from "react";
import Link from "next/link";

const Footer = ({ t }) => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer--row">
          <h5 className="footer--title">Atlas Kontrol Sistemleri</h5>
          <nav>
            <ul>
              <li className="menu-item">
                <Link href="/#about">{t.menu.about}</Link>
              </li>
              <li className="menu-item">
                <Link href="/#services">{t.menu.services}</Link>
              </li>
              <li className="menu-item">
                <Link href="/#partners">{t.menu.partners}</Link>
              </li>
              <li className="menu-item">
                <Link href="/contact">{t.menu.contact}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer--trademark">Atlas Kontrol Sistemleri - 2023</div>
    </div>
  );
};

export default Footer;
