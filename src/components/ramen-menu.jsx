import React from "react"
import { ItemMenu } from "../components/item-menu/item-menu"



const RamenMenu = () => {
    const ramens = [
        {
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
            <h1 className='font'>рамен</h1>
            <ItemMenu items={ramens} />
        </div>
    )
}

export default RamenMenu