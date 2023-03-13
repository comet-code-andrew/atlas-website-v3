import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer--row">
          <h5 className="footer--title">Atlas Kontrol Sistemleri</h5>
          <nav>
            <ul>
              <li className="menu-item">
                <Link href="/#about">About</Link>
              </li>
              <li className="menu-item">
                <Link href="/#services">Services</Link>
              </li>
              <li className="menu-item">
                <Link href="/#partners">Partners</Link>
              </li>
              <li className="menu-item">
                <Link href="/contact">Contact</Link>
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
