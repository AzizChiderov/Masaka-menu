import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Tempura1 from "../images/Menu/tempura/tempura1.png"
import Tempura2 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import Tempura3 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import Tempura4 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import Tempura5 from "../images/Menu/tempura/tempura5.png"
import Tempura6 from "../images/Menu/tempura/tempura6.png"
import Tempura7 from "../images/Menu/tempura/tempura7.png"
import Tempura8 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
const TempuraRollMenu = () => {
    const tempuras = [
        {
            category: "ТЕМПУРА РОЛЛЫ",
            id: 1,
            name: "КАГУАССЕ",
            ingredients: [
                "шпинат",
                "зеленый лук",
                "тобика",
                "сыр виола",
                "огурцы",
                "семга",
                "снежный краб"
            ],
            photo: `${Tempura1}`,
            price: 355,
            weight: 270
        },
        {
            id: 2,
            name: "ТЕМПУРА ОСАКА",
            ingredients: [
                "семга",
                "снежный краб",
                "тобико",
                "сыр виола",
                "огурец"
            ],
            photo: `${Tempura2}`,
            price: 345,
            weight: 280
        },
        {
            id: 3,
            name: "ТЕМПУРА ЧИКЕН",
            ingredients: [
                "курица",
                "помидор",
                "нежный сыр",
                "глист салата",
                "фирменный соус",
                "пармезан"
            ],
            photo: `${Tempura3}`,
            price: 345,
            weight: 300
        },
        {
            id: 4,
            name: "ЮДЗАВА",
            ingredients: [
                "угорь",
                "огурец",
                "снежный краб",
                "тобика",
                "кунжут",
                "унаги соус",
                "спайси соус"
            ],
            photo: `${Tempura4}`,
            price: 345,
            weight: 280
        },
        {
            id: 5,
            name: "СИНСИРО",
            ingredients: [
                "тунец",
                "снежный краб",
                "сыр виола",
                "огурец",
                "соус пармежано"
            ],
            photo: `${Tempura5}`,
            price: 345,
            weight: 300
        },
        {
            id: 6,
            name: "ТЕМПУРА ЧУКА",
            ingredients: [
                "снежный краб",
                "сыр виола",
                "угорь",
                "чука",
                "авокадо",
                "кунжут"
            ],
            photo: `${Tempura6}`,
            price: 445,
            weight: 300
        },
        {
            id: 7,
            name: "ТЕМПУРА LOVE",
            ingredients: [
                "семга",
                "нежный сыр",
                "соус унаги"
            ],
            photo: `${Tempura7}`,
            price: 545,
            weight: 300
        },
        {
            id: 8,
            name: "ОРЕХОВАЯ ТЕМПУРА",
            ingredients: [
                "угорь", 
                "семга", 
                "сыр виола", 
                "ореховый соус"
            ],
            photo: `${Tempura8}`,
            price: 345,
            weight: 280
        }
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={tempuras} />
        </div>
    );
};

export default TempuraRollMenu;




