import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Soup1 from "../images/Menu/soup/soup1.png"
import Soup2 from "../images/Menu/soup/soup2.png"
import Soup3 from "../images/Menu/soup/soup3.png"
import Soup4 from "../images/Menu/soup/soup4.png"
import Soup5 from "../images/Menu/soup/soup5.png"
import Soup6 from "../images/Menu/soup/soup6.png"
import Soup7 from "../images/Menu/soup/soup7.png"
import Soup8 from "../images/Menu/soup/soup8.png"
import Soup9 from "../images/Menu/soup/soup9.png"
import Soup10 from "../images/Menu/soup/soup10.png"
import Soup11 from "../images/Menu/soup/soup11.png"
import Soup12 from "../images/Menu/soup/soup12.png"

const SoupMenu = () => {
    const soups = [
        {
            category: "СУПЫ",
            id: 1,
            name: "куксу",
            description: "холодный куксу по-китайски",
            photo: `${Soup1}`,
            price: 220,
            weight: 330
        },
        {
            id: 2,
            name: "удон танг",
            description: "японский домашний удон с коричневой курицей, отварным яйцом в зеленом чае и наваристым бульоном по-азиатски",
            photo: `${Soup2}`,
            price: 215,
            weight: 410
        },
        {
            id: 3,
            name: "юкеджан",
            description: "корейский традиционный суп, на основе говяжьего бульона с овощами",
            photo: `${Soup3}`,
            price: 275,
            weight: 350
        },
        {
            id: 4,
            name: "острый суп масака",
            description: "куриное филе, древесные грибы, лапша, тофу, специи табанжан, соус кочудян ",
            photo: `${Soup4}`,
            price: 275,
            weight: 370
        },
        {
            id: 5,
            name: "рамен",
            photo: `${Soup5}`,

            ingr: [
                {
                    name: "курица",
                    weight: 50,
                    price: 60,
                },
                {
                    name: "говядина",
                    weight: 50,
                    price: 90
                },
                {
                    name: "сыр",
                    weight: 50,
                    price: 90
                },
                {
                    name: "яйцо куриное",
                    count: 1,
                    price: 30
                }



            ],
            price: 185,
            weight: 370
        },
        {
            id: 6,
            name: "ню миан лапша",
            description: "суп на основе кисло-сладкого говяжьего бульона с говядиной и удон лапшой",
            photo: `${Soup6}`,
            price: 370,
            weight: 410
        },
        {
            id: 7,
            name: "суп мисо",
            ingredients: [
                "тофу",
                "шитаки",
                "вакамэ",
            ],
            photo: `${Soup7}`,
            price: 145,
            weight: 300,
        },
        {
            id: 8,
            name: "суп би-хун",
            description: "суп на основе рыбного бульона с ростками фасоли, с золотыми нитями, с азиатской лапшой",
            photo: `${Soup8}`,
            price: 250,
            weight: 350
        },
        {
            id: 9,
            name: "мисо суп с креветкой сливочный",
            description: "мисо суп с креветкой сливочный",
            photo: `${Soup9}`,
            price: 285,
            weight: 340
        },
        {
            id: 10,
            name: "том ям рамен",
            description: "тайский традиционный том яс с морепродуктами, с тонкой китайской лапшой",
            photo: `${Soup10}`,
            price: 505,
            weight: 370
        },
        {
            id: 11,
            name: "мисо с семгой",
            description: "мисо суп с семгой сливочный",
            photo: `${Soup11}`,
            price: 295,
            weight: 340
        },
        {
            id: 12,
            name: "суп том ям",
            description: "традиционный тайский суп, кокосовое молоко, тигровые креветки, кальмар, томаты черри и чили",
            photo: `${Soup12}`,
            price: 495,
            weight: 350
        }
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={soups} />
        </div>
    );
};

export default SoupMenu;




