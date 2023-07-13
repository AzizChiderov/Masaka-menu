import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import menuData from "../../../menuData.json"

export const Nav = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const links = menuData.links
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavFixed(scrollPosition > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="nav"
      className={`nav ${isNavFixed ? "fixed" : ""}`}
      style={{
        transition: "top 0.3s ease-in-out",
      }}
    >
      <div className="link-wrapper">
        {links.map(({ id, text, route }) => (
          <NavLink className="link" key={id} to={route}>
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
