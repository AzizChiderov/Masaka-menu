import React from "react"
import { ItemMenu } from "../components/item-menu/item-menu"



const RamenMenu = () => {
    const ramens = [
        {
            category: "Рамен",
            id: 1,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 2,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 3,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 4,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 5,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 6,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 7,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        },
        {
            id: 8,
            name: "",
            // photo: `${Tofu}`,
            price: 425
        }
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={ramens} />
        </div>
    )
}

export default RamenMenu