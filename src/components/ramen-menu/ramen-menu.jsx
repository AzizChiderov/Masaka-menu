import React from "react"
import { ItemMenu } from "../item-menu/item-menu"
import Ramen1 from '../images/Menu/ramen/ramen1.jpg'
import Ramen2 from '../images/Menu/ramen/ramen2.jpg'
import Ramen3 from '../images/Menu/ramen/ramen3.jpg'
import Ramen4 from '../images/Menu/ramen/ramen4.jpg'
import Ramen5 from '../images/Menu/ramen/ramen5.jpg'
import Ramen6 from '../images/Menu/ramen/ramen6.jpg'
import Ramen7 from '../images/Menu/ramen/ramen7.jpg'
import Ramen8 from '../images/Menu/ramen/ramen8.jpg'





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
            photo: `${Ramen2}`,
            price: 295
        },
        {
            id: 3,
            name: "рамен с копченным куринным филе",
            photo: `${Ramen3}`,
            price: 345
        },
        {
            id: 4,
            name: "кимчи рамен",
            photo: `${Ramen4}`,
            price: 295
        },
        {
            id: 5,
            name: "токпоки рамен",
            photo: `${Ramen5}`,
            price: 250
        },
        {
            id: 6,
            name: "рамен с тофу",
            photo: `${Ramen6}`,
            price: 250
        },
        {
            id: 7,
            name: "эноки рамен",
            photo: `${Ramen7}`,
            price: 330
        },
        {
            id: 8,
            name: "жаренный рамен",
            photo: `${Ramen8}`,
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