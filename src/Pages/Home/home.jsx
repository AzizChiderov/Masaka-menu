import React, { useState, useEffect } from "react";
import H from "./home.module.css";
import Nav from "../../components/nav/index";
import Logo from "../../components/images/JPG/Masaka-logo-white-red.png";

const Home = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);

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

  return (
    <div className={H.container}>
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

export default Home;
