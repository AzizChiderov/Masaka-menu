import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Set1 from "../images///Menu/set/set1.png"
import Set2 from "../images///Menu/set/set2.png"
import Set3 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import Set4 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import Set5 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import Set6 from '../images/Menu/baked-roll/MASAKA SUSHI.png'

const SetMenu = () => {
    const sets = [
        {
            id: 1,
            name: "студент",            
            photo: `${Set1}`,
            price: 755
        },
        {
            id: 2,
            name: "студент про",            
            photo: `${Set2}`,
            price: 1150
        },
        {
            id: 3,
            name: "masaka",            
            photo: `${Set3}`,
            price: 2155
        },
        {
            id: 4,
            name: "семейный",
            photo: `${Set4}`,
            price: 2695
        },
        {
            id: 5,
            name: "hot",
            photo: `${Set5}`,            
            price: 1695
        },
        {
            id: 6,
            name: "классический",
            photo: `${Set6}`,            
            price: 1250
        }       
    ];

  return (
    <div className="item-menu">
      <h1>СЕТЫ</h1>
      <ItemMenu items={sets} />
    </div>
  );
};

export default SetMenu;




