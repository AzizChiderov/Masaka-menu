import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Noodle1 from "../images/Menu/noodles/noodle1.png"
import Noodle2 from "../images/Menu/noodles/noodle2.png"
import Noodle3 from "../images/Menu/noodles/noodle3.png"
import Noodle4 from "../images/Menu/noodles/noodle4.png"
import Noodle5 from "../images/Menu/noodles/noodle5.png"

const NoodleMenu = () => {
    const noodles = [
        {
            category: "БЛЮДА С ЛАПШОЙ",
            id: 1,
            name: "карбонара по- азиатски",
            description: "традиционная японская лапша удон. с подкопченной говяжьей ветчиной, в сливочном и терияки соусах, с пармезаном",
            photo: `${Noodle1}`,
            weight: "320",
            price: 365
        },
        {
            id: 2,
            name: "домашний японский удон",
            description: "жаренный удон с креветками в соусе терияки",
            photo: `${Noodle2}`,
            weight: "290",
            price: 225
        },
        {
            id: 3,
            name: "филе ягненка с фунчозой",
            description: "маринованная баранья вырезка, жареная с тонкой лапшой, жусаем, пряным японским перцем и соками соусом",
            photo: `${Noodle3}`,
            weight: "270",
            price: 365
        },
        {
            id: 4,
            name: "спайси харусаме",
            description: "фунчоза в пряном соусе, с ветчиной по-азиатски(Халал)",
            photo: `${Noodle4}`,
            weight: "450",
            price: 495
        },
        {
            id: 5,
            name: "индейка с брокколи",
            description: "стеклянная лапша фунчоза подается с нежным филе из индейки с хрустящими брокколи и овощами. Подается с соусом из куркумы",
            photo: `${Noodle5}`,
            weight: "320",
            price: 295
        }
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={noodles} />
    </div>
  );
};

export default NoodleMenu;




