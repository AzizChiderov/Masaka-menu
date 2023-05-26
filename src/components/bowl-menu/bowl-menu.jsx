import React from "react";
import "../item-menu/item-menu.css";
import bowl1 from '../images/Menu/bowl/bowl1.png'
import bowl2 from '../images/Menu/bowl/bowls2.png'
import bowl3 from '../images/Menu/bowl/bowls3.png'
import bowl4 from '../images/Menu/bowl/bowls4.png'

import { ItemMenu } from "../item-menu/item-menu";

const BowlMenu = () => {
    const bowls = [
        {
            id: 1,
            name: "Боул с семгой",
            ingredients: [
                "Поке боул с семгой , овощами, и салатной заправкой"
            ],
            description: "Поке боул с семгой , овощами, и салатной заправкой",
            photo: `${bowl1}`,
            weight: "480 ",
            price: 565 
        },
        {
            id: 2,
            name: "Боул Mорской",
            ingredients: [
                "Разновидный ассортимент из овощей,с салатой заправкой и креветками"
            ],
            description: "Разновидный ассортимент из овощей,с салатой заправкой и креветками",
            photo: `${bowl2}`,
            weight: "440 ",
            price: 425 
        },
        {
            id: 3,
            name: "Боул с угрем",
            ingredients: [
                "Поке боул с угрем в соусе унаги, c овощами и витаминной наброской."
            ],
            description: "Поке боул с угрем в соусе унаги, c овощами и витаминной наброской.",
            weight: "440 ",
            photo: `${bowl3}`,
            price: 585
        },
        {
            id: 4,
            name: "Боул с Курицей",
            ingredients: [
                "Мягко обжаренная курица в соусе теряки с кукурузой, фасолью и овощной заправкой."
            ],
            description: "Мягко обжаренная курица в соусе теряки с кукурузой, фасолью и овощной заправкой.",
            photo: `${bowl4}`,
            weight: "440 ",
            price: 415
        },
    ];

  return (
    <div className="item-menu">
      <h1>БОУЛЫ</h1>
      <ItemMenu items={bowls} />
    </div>
  );
};

export default BowlMenu;






