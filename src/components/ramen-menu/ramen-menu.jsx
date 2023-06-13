import React from "react"
import { ItemMenu } from "../item-menu/item-menu"



const RamenMenu = () => {
    const ramens = [
        {
            category: "Рамен",
            id: 1,
            name: "рамен ассорти",
            // photo: `${Tofu}`,
            price: 400
        },
        {
            id: 2,
            name: "мисо рамен",
            // photo: `${Tofu}`,
            price: 295
        },
        {
            id: 3,
            name: "рамен с копченным куринным филе",
            // photo: `${Tofu}`,
            price: 345
        },
        {
            id: 4,
            name: "кимчи рамен",
            // photo: `${Tofu}`,
            price: 295
        },
        {
            id: 5,
            name: "токпоки рамен",
            // photo: `${Tofu}`,
            price: 250
        },
        {
            id: 6,
            name: "рамен с тофу",
            // photo: `${Tofu}`,
            price: 250
        },
        {
            id: 7,
            name: "эноки рамен",
            // photo: `${Tofu}`,
            price: 330
        },
        {
            id: 8,
            name: "жаренный рамен",
            // photo: `${Tofu}`,
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