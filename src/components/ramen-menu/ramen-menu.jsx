import React from "react"
import { ItemMenu } from "../item-menu/item-menu"
import Ramen1 from '../images/Menu/baked-roll/MASAKA SUSHI.png'





const RamenMenu = () => {
    const ramens = [
        {
            category: "Рамен",
            id: 1,
            name: "рамен ассорти",
            photo: `${Ramen1}`,
            price: 400
        },
        {
            id: 2,
            name: "мисо рамен",
            photo: `${Ramen1}`,
            price: 295
        },
        {
            id: 3,
            name: "рамен с копченным куринным филе",
            photo: `${Ramen1}`,
            price: 345
        },
        {
            id: 4,
            name: "кимчи рамен",
            photo: `${Ramen1}`,
            price: 295
        },
        {
            id: 5,
            name: "токпоки рамен",
            photo: `${Ramen1}`,
            price: 250
        },
        {
            id: 6,
            name: "рамен с тофу",
            photo: `${Ramen1}`,
            price: 250
        },
        {
            id: 7,
            name: "эноки рамен",
            photo: `${Ramen1}`,
            price: 330
        },
        {
            id: 8,
            name: "жаренный рамен",
            photo: `${Ramen1}`,
            price: 345
        }
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={ramens} />
        </div>
    )
}

export default RamenMenu