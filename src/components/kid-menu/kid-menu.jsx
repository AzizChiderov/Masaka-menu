import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Kid1 from "../images/Menu/kids/kid1.png"
import Kid2 from "../images/Menu/kids/kid2.png"
import Kid3 from "../images/Menu/baked-roll/MASAKA SUSHI.png"
import Kid4 from "../images/Menu/kids/kids4.jpg"
import Kid5 from "../images/Menu/kids/kids5.jpg"
import Kid6 from "../images/Menu/kids/kids6.jpg"
import Kid7 from "../images/Menu/kids/kids7.jpg"
import bread from "../images/Menu/kids/bread.jpg"

const KidMenu = () => {
  const kids = [
    {
      category: "ДЕТСКОЕ МЕНЮ",
      id: 1,
      name: "куриный бульон с лапшой ",
      photo: `${Kid5}`,
      price: 220
    },
    {
      id: 2,
      name: "фрикадельки с вермишелью",
      photo: `${Kid7}`,
      price: 200
    },
    {
      id: 3,
      name: "сосиски с киндер фри",
      photo: `${Kid4}`,
      price: 245
    },
    {
      id: 4,
      name: "фарфалле с осминожками и с сырними шариками",
      photo: `${Kid1}`,
      price: 250
    },
    {
      id: 5,
      name: "куриная котлета с фри",
      photo: `${Kid2}`,
      price: 295
    },
    {
      id: 6,
      name: "чикен болл с пюре",
      photo: `${Kid6}`,
      price: 245
    },
    {
      id: 7,
      name: "хлебная корзина",
      photo: `${bread}`,
      price: 205,
      name2: "багет",
      price2: 80
    }
  ];

  return (
    <div className="item-menu">
      <ItemMenu items={kids} />
    </div>
  );
};

export default KidMenu;




