import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Gunkan1 from "../images/Menu/gunkan/susi1.png"
import Gunkan2 from "../images/Menu/gunkan/susi3.png"
import Gunkan3 from "../images/Menu/gunkan/susi5.jpg"
import Gunkan4 from "../images/Menu/gunkan/susi2.png"
import Gunkan7 from "../images/Menu/gunkan/susi7.png"
import Gunkan8 from "../images/Menu/gunkan/susi8.jpg"

const GunkanMenu = () => {
    const gunkans = [
        {
            category: "ГУНКАНЫ И СУСИ",
            id: 1,
            name: "гункан с крабом",
            photo: `${Gunkan1}`,
            weight: "60",
            price: 255 
        },
        {
            id: 2,
            name: "гункан с угрем",
            photo: `${Gunkan2}`,  
            weight: "60",
            price: 275
        },
        {
            id: 3,
            name: "гункан с семгой",
            photo: `${Gunkan3}`,
            weight: "60",
            price: 285
        },
        {
            id: 4,
            name: "суси из тунца",
            photo: `${Gunkan4}`,
            weight: "55",
            price: 125
        },
        {
            id: 5,
            name: "суси из семги",
            photo: `${Gunkan8}`,
            weight: "55",
            price: 135
        },
        {
            id: 6,
            name: "суси из креветки",
            photo: `${Gunkan8}`,
            weight: "55",
            price: 115
        },
        {
            id: 7,
            name: "суси из угря",
            photo: `${Gunkan7}`,
            weight: "55",
            price: 265
        }
    ];

  return (
      <div className="item-menu">
      <ItemMenu items={gunkans} />
    </div>
  );
};

export default GunkanMenu;




