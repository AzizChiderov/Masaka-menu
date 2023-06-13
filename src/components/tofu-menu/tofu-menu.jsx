import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Tofu from "../images/Menu/tofu/tofu.png"
import Tofu2 from "../images/Menu/tofu/tofu2.png"
import Tofu3 from "../images/Menu/tofu/tofu3.png"
import Tofu4 from "../images/Menu/tofu/tofu4.png"
import Tofu5 from "../images/Menu/tofu/tofu5.png"


const TofuMenu = () => {
    const tofus = [
        {
            category: "БЛЮДА ИЗ ТОФУ",
            id: 1,
            name: "тофу с лимон райс в соусе карри",
            description: "тофу с лимон-райсом в соусе карри — идеальное сочетание нежности, свежести и остроты.",
            photo: `${Tofu}`,
            weight: 330,
            price: 255
        },
        {
            id: 2,
            name: "тофу в панировке с соусом карри",
            description: "нежный тофу в хрустящей панировке с медовым соусом карри",
            photo: `${Tofu2}`,
            weight: 290,
            price: 205
        },
        {
            id: 3,
            name: "караи тофу",
            description: "хрустящей тофу в сладко-остром соусе",
            photo: `${Tofu3}`,
            weight: 180,
            price: 245
        },
        {
            id: 4,
            name: "жаренный тофу",
            description: "жаренный тофу в соевом соусе",
            photo: `${Tofu4}`,
            weight: 200,
            price: 250
        },
        {
            id: 5,
            name: "спайси тофу",
            description: "тофу по-китайски с острым бульоном, с мелко нарезанным зелёным луком и кунжутом",
            photo: `${Tofu5}`,
            weight: 180,
            price: 150
        },
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={tofus} />
    </div>
  );
};

export default TofuMenu;




