import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/atlas-logo-md.png";

import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar--container">
      <div className="navbar--wrapper">
        <Link href="/">
          <Image src={logo} alt="logo" width={130} />
        </Link>
        <nav>
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--item">
              <Link href="#about">About</Link>
            </li>
            <li className="nav--item">
              <Link href="#services">Services</Link>
            </li>
            <li className="nav--item">
              <Link href="#partners">Partners</Link>
            </li>
            <li className="nav--item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="mobile--icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
