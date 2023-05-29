import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Tofu from "../images/Menu/Tofu/tofu.png"
import Tofu2 from "../images/Menu/Tofu/tofu2.png"
import Tofu3 from "../images/Menu/Tofu/tofu3.png"
import Tofu4 from "../images/Menu/Tofu/tofu4.png"
import Tofu5 from "../images/Menu/Tofu/tofu5.png"


const TofuMenu = () => {
    const tofus = [
        {
            id: 1,
            name: "тофу с лимон райс в соусе карри",
            description: "Тофу с лимон-райсом в соусе карри — идеальное сочетание нежности, свежести и остроты.",
            photo: `${Tofu}`,
            weight: 330,
            price: 255
        },
        {
            id: 2,
            name: "тофу в панировке с соусом карри",
            description: "Нежный тофу в хрустящей панировке с медовым соусом карри",
            photo: `${Tofu2}`,
            weight: 290,
            price: 205
        },
        {
            id: 3,
            name: "караи тофу",
            description: "Хрустящей тофу в сладко-остром соусе",
            photo: `${Tofu3}`,
            weight: 180,
            price: 245
        },
        {
            id: 4,
            name: "жаренный тофу",
            description: "Жаренный тофу в соевом соусе",
            photo: `${Tofu4}`,
            weight: 200,
            price: 250
        },
        {
            id: 5,
            name: "спайси тофу",
            description: "Тофу по-китайски с острым бульоном, с мелко нарезанным зелёным луком и кунжутом",
            photo: `${Tofu5}`,
            weight: 180,
            price: 150
        },
    ];

  return (
    <div className="item-menu">
      <h1 className='font'>БЛЮДА ИЗ ТОФУ</h1>
      <ItemMenu items={tofus} />
    </div>
  );
};

export default TofuMenu;




