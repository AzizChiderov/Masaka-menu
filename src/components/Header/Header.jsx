import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import H from "./Header.module.css";
import Bg from "../../image/JPG/HeaderBg.jpg"
import Nav from "./nav/index";
import Logo from "../../image/PNG/Masaka-logo-white-red.png";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleNavTransition = () => {
      if (window.pageYOffset > 0) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleNavTransition);
    return () => {
      window.removeEventListener("scroll", handleNavTransition);
    };
  }, []);

  // useEffect(() => {
  //   navigate("/buisness-lunch");
  // }, []);
  return (
    <div className={H.container} style={{
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"}}>
      <div
        id="header"
        className={`${H.box} ${H.header} ${
          isHeaderVisible ? "" : H.scrolled
        } ${isNavFixed ? H.fixed : ""}`}
      >
       <a href="https://www.instagram.com/masaka_bishkek/" target="_blank" rel="noreferrer">
  <img className={H.logo_img} src={Logo} alt="MASAKA" />
</a>
        <h2 className={`font_medium ${H.title}`}>ДОБРО ПОЖАЛОВАТЬ!</h2>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
