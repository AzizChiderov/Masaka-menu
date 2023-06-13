import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Fish1 from "../images/Menu/fish/fish1.png"
import Fish2 from "../images/Menu/fish/fish2.png"
import Fish3 from "../images/Menu/fish/fish3.png"
import Fish4 from "../images/Menu/fish/fish4.png"
import Fish5 from "../images/Menu/fish/fish5.png"
import Fish6 from "../images/Menu/fish/fish6.png"

const Fishmenu = () => {
    const fishs = [
        {
            category: "БЛЮДА ИЗ РЫБЫ",
            id: 1,
            name: "форель под соусом баже",
            description: "нежная форель подается с ореховым соусом баже и свежим салатом",
            photo: `${Fish1}`,
            weight: "390",
            price: 690
        },
        {
            id: 2,
            name: "саба гриль",
            description: "скумбрия со свежими овощами в пикантом соусе",
            photo: `${Fish2}`,
            weight: "300",
            price: 335
        },
        {
            id: 3,
            name: "морской язык в конверте",
            description: "филе рыбы морского языка с отварными картофельными дольками со сливочным масломм и миксом сыров",
            photo: `${Fish3}`,
            weight: "350",
            price: 305
        },
        {
            id: 4,
            name: "хрустящий судак с брокколи",
            description: "филе судака со свежими брокколи, с оригиальным и пикантным соусом",
            photo: `${Fish4}`,
            weight: "300",
            price: 495
        },
        {
            id: 5,
            name: "семга в соусе песто",
            description: "запеченное филе семги с картофельными клиньями в соусе песто",
            photo: `${Fish5}`,
            weight: "340",
            price: 525
        },
        {
            id: 6,
            name: "унаги семга",
            description: "стейк из семги с соусом унаги и шпинатом",
            photo: `${Fish6}`,
            weight: "340",
            price: 525
        }
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={fishs} />
    </div>
  );
};

export default Fishmenu;




