import React from "react";
import "../item-menu/item-menu.css";
import bowl1 from '../images/Menu/bowl/bowl1.png'
import bowl2 from '../images/Menu/bowl/bowl2.jpg'
import bowl3 from '../images/Menu/bowl/bowl3.jpg'
import bowl4 from '../images/Menu/bowl/bowl4.png'
import bowl5 from '../images/Menu/bowl/bowl5.png'
import bowl6 from '../images/Menu/bowl/bowl6.png'
import { ItemMenu } from "../item-menu/item-menu";


const BowlMenu = () => {
    const bowls = [
        {
            category: "БОУЛЫ",
            id: 1,
            name: "поке боул с курицей",
            description: "мягко обжаренная курица в соусе теряки с кукурузой, фасолью и овощной заправкой.",
            photo: `${bowl1}`,
            price: 415,
            weight: 480
        },
        {
            id: 2,
            name: "поке боул вегетерианский",
            description: "поке боул веган с овощами и витаминной бомбой по-азиатски",
            photo: `${bowl2}`,
            price: 375,
            weight: 440
        },
        {
            id: 3,
            name: "гавайский традиционный поке боул",
            photo: `${bowl3}`,
            price: 375,
            weight: 480
        },
        
        {
            id: 4,
            name: "поке боул с угрем",
            description: "поке боул с угрем в соусе унаги, c овощами и витаминной наброской.",
            photo: `${bowl4}`,
            price: 585,
            weight: 440
        },
        {
            id: 5,
            name: "поке боул с семгой",
            description: "поке боул с семгой , овощами, и салатной заправкой",
            photo: `${bowl5}`,
            price: 565,
            weight: 480 
        },
        {
            id: 6,
            name: "поке боул Mорской",
            description: "разновидный ассортимент из овощей,с салатой заправкой и креветками",
            photo: `${bowl6}`,
            price: 425, 
            weight: 440
        },
        
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={bowls} />
    </div>
  );
};

export default BowlMenu;






