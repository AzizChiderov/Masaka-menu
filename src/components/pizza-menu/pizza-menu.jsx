import React from "react"
import "../item-menu/item-menu.css"
import { ItemMenu } from "../item-menu/item-menu"
import Pizza1 from '../images/Menu/baked-roll/MASAKA SUSHI.png'



const PizzaMenu = () => {
    const pizzas = [
        {
            category: "ПИЦЦА",
            id: 1,
            name: "пицца пепперони",
            photo: `${Pizza1}`,
            price: 425
        },
        {
            id: 2,
            name: "пицца альфредо",
            photo: `${Pizza1}`,
            price: 465
        },
        {
            id: 3,
            name: "пицца чили",
            photo: `${Pizza1}`,
            price: 485
        },
        {
            id: 4,
            name: "пицца 4 сыра",
            photo: `${Pizza1}`,
            price: 465
        },
        {
            id: 5,
            name: "пицца мясная",
            photo: `${Pizza1}`,
            price: 525
        },
        {
            id: 6,
            name: "пицца морская",
            photo: `${Pizza1}`,
            price: 625
        },
        {
            id: 7,
            name: "пицца цезарь с курицей",
            photo: `${Pizza1}`,
            price: 395
        },
        {
            id: 8,
            name: "пирог с вишней",
            photo: `${Pizza1}`,
            price: 345
        }
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={pizzas} />
    </div>
  );
};

export default PizzaMenu;




