import React from "react"
import "../item-menu/item-menu.css"
import { ItemMenu } from "../item-menu/item-menu"
import Pizza1 from '../images/Menu/pizza/pizza1.jpg'
import Pizza2 from '../images/Menu/pizza/pizza2.jpg'
import Pizza3 from '../images/Menu/pizza/pizza3.jpg'
import Pizza4 from '../images/Menu/pizza/pizza4.jpg'
import Pizza5 from '../images/Menu/pizza/pizza5.jpg'
import Pizza6 from '../images/Menu/pizza/pizza6.jpg'
import Pizza7 from '../images/Menu/pizza/pizza7.jpg'
import Pizza8 from '../images/Menu/pizza/pizza8.jpg'



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
            photo: `${Pizza2}`,
            price: 465
        },
        {
            id: 3,
            name: "пицца чили",
            photo: `${Pizza3}`,
            price: 485
        },
        {
            id: 4,
            name: "пицца 4 сыра",
            photo: `${Pizza4}`,
            price: 465
        },
        {
            id: 5,
            name: "пицца мясная",
            photo: `${Pizza5}`,
            price: 525
        },
        {
            id: 6,
            name: "пицца морская",
            photo: `${Pizza6}`,
            price: 625
        },
        {
            id: 7,
            name: "пицца цезарь с курицей",
            photo: `${Pizza7}`,
            price: 395
        },
        {
            id: 8,
            name: "пирог с вишней",
            photo: `${Pizza8}`,
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




