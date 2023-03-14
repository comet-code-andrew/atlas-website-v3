import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/atlas-logo-md.png";

import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = ({ t }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div id="navbar">
      <div className="wrapper">
        <Link href="/">
          <Image src={logo} alt="logo" width={130} />
        </Link>
        <nav>
          <ul className={click ? "menu active" : "menu"}>
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
        <div className="mobile-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
