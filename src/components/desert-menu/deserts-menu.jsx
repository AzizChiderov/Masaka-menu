import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Desert1 from "../images/Menu/desert/desert1.png"
import Desert2 from "../images/Menu/desert/desert2.png"
import Desert3 from "../images/Menu/desert/desert3.png"

const DesertMenu = () => {
  const deserts = [
    {
      category: "ДЕСЕРТЫ",
      id: 1,
      name: "микс куриму",
      description: "Мороженное три вида: орех, васаби, имбирь",
      photo: `${Desert1}`,
      price: 199,
      weight: 180
    },
    {
      id: 2,
      name: "моти",
      photo: `${Desert2}`,
      price: 240,
      count: 1
    },
    {
      id: 3,
      name: "десертные роллы",
      photo: `${Desert3}`,
      price: 250,
      weight: 150
    }
  ];

  return (
    <div className="item-menu">
      <ItemMenu items={deserts} />
    </div>
  );
};

export default DesertMenu;




