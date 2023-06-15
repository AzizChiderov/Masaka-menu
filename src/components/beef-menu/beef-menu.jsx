import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Beef1 from "../images/Menu/beef/beef1.png"
import Beef2 from "../images/Menu/beef/beef2.png"
import Beef3 from "../images/Menu/beef/beef3.png"
import Beef4 from "../images/Menu/beef/beef4.jpg"
import Beef5 from "../images/Menu/beef/beef5.jpg"
import Beef6 from "../images/Menu/beef/beef6.png"
import Beef7 from "../images/Menu/beef/beef7.png"

const BeefMenu = () => {
    const beefs = [
        {
            category: "БЛЮДА С ГОВЯДИНОЙ",
            id: 1,
            name: "тамагодон",
            description: "рис с говядиной в соусе терияки, с ростками фасоли, кимчи, с яйцом по- азиатски",
            photo: `${Beef1}`,
            weight: "390",
            price: 305
        },
        {
            id: 2,
            name: "гю эноки",
            description: "хрустящие грибы эноки завернутые в нежном филе говядины, соусом кимчи и свит чили",
            photo: `${Beef2}`,
            weight: "320",
            price: 545
        },
        {
            id: 3,
            name: "бонкацу",
            description: "закрученное бон-филе с голландским сыром гауда, в кисло-сладком соусе тонкацу",
            photo: `${Beef3}`,
            weight: "300",
            price: 595
        },
        {
            id: 4,
            name: "медальоны с лимон райс",
            description: "медальоны с лимон райс, в сливочно-грибном соусе",
            photo: `${Beef4}`,
            weight: "360",
            price: 695
        },
        {
            id: 5,
            name: "эдамаме гю стейк",
            description: "стейк, маринованный в пряном перце, прожаренный до шоколадной корочки. Подается с соусом Биск",
            photo: `${Beef5}`,
            weight: "310",
            price: 695
        },
        {
            id: 6,
            name: "нихон стейк с брокколи",
            description: "нежный стейк из филе говядины, маринованный в соусе кимчи, пропитанный соусом терияки со свежей брокколи",
            photo: `${Beef6}`,
            weight: "340",
            price: 685
        },
        {
            id: 7,
            name: "бон филе с токпоками",
            description: "корейские рисовые палочки с говяжьей вырезкой и овощами в кисло-остром соусе",
            photo: `${Beef7}`,
            weight: "330",
            price: 455
        }
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={beefs} />
    </div>
  );
};

export default BeefMenu;






