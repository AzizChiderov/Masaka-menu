import React from "react"
import "../item-menu/item-menu.css"
import { ItemMenu } from "../item-menu/item-menu"
import Tofu from "../images/Menu/tofu/tofu.png"
import Tofu2 from "../images/Menu/tofu/tofu2.png"
import Tofu3 from "../images/Menu/tofu/tofu3.png"
import Tofu4 from "../images/Menu/tofu/tofu4.png"
import Tofu5 from "../images/Menu/tofu/tofu5.png"


const PizzaMenu = () => {
    const pizzas = [
        {
            id: 1,
            name: "пицца пепперони",
            photo: `${Tofu}`,
            price: 425
        },
        {
            id: 2,
            name: "пицца альфредо",
            photo: `${Tofu2}`,
            price: 465
        },
        {
            id: 3,
            name: "пицца чили",
            photo: `${Tofu3}`,
            price: 485
        },
        {
            id: 4,
            name: "пицца 4 сыра",
            photo: `${Tofu4}`,
            price: 465
        },
        {
            id: 5,
            name: "пицца мясная",
            photo: `${Tofu4}`,
            price: 525
        },
        {
            id: 6,
            name: "пицца морская",
            photo: `${Tofu5}`,
            price: 625
        },
        {
            id: 7,
            name: "пицца цезарь с курицей",
            photo: `${Tofu4}`,
            price: 395
        },
        {
            id: 8,
            name: "пирог с вишней",
            photo: `${Tofu5}`,
            price: 345
        }
    ];

  return (
    <div className="item-menu">
      <h1 className='font'>ПИЦЦА</h1>
      <ItemMenu items={pizzas} />
    </div>
  );
};

export default PizzaMenu;




