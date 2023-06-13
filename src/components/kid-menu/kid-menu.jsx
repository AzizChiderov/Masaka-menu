import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Kid1 from "../images/Menu/kids/kid1.png"
import Kid2 from "../images/Menu/kids/kid2.png"
import Kid3 from "../images/Menu/baked-roll/MASAKA SUSHI.png"

const KidMenu = () => {
  const kids = [
    {
      category: "ДЕТСКОЕ МЕНЮ",
      id: 1,
      name: "фарфалле с осминожками и с сырними шариками",
      photo: `${Kid1}`,
      price: 250
    },
    {
      id: 2,
      name: "куриная котлета с фри",
      photo: `${Kid2}`,
      price: 295
    },
    {
      id: 3,
      name: "чикен болл с пюре",
      photo: `${Kid3}`,
      price: 245
    }
  ];

  return (
    <div className="item-menu">
      <ItemMenu items={kids} />
    </div>
  );
};

export default KidMenu;




