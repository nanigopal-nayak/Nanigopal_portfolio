import React, { useRef, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- New state to track menu visibility
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      
      {!isMenuOpen && (
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      )}
      
      {isMenuOpen && (
        <img src={menu_close} alt="Close Menu" onClick={closeMenu} className="nav-mob-close" />
      )}
      
      <ul ref={menuRef} className="nav-menu">
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" && <img src={underline} alt="" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" && <img src={underline} alt="" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#service"><p onClick={() => setMenu("service")}>Services</p></AnchorLink>{menu === "service" && <img src={underline} alt="" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" && <img src={underline} alt="" />}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" && <img src={underline} alt="" />}</li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
      </div>
    </div>
  );
};
export default Navbar