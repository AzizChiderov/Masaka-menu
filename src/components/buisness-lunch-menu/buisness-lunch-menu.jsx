import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Lunch from "../images/Menu/lunch/lunch.png"
import Lunch2 from "../images/Menu/lunch/lunch5.png"
import Lunch3 from "../images/Menu/lunch/lunch6.png"
import Lunch4 from "../images/Menu/lunch/lunch2.png"
import Lunch5 from "../images/Menu/lunch/lunch3.png"
import Lunch6 from "../images/Menu/lunch/lunch4.png"

const BuisnessLunchMenu = () => {
    const lunches = [

        {
            category: "Бизнес Ланчы",
            id: 1,
            name: "Бизнес ланч Азия",
            ingredients: [
                "кимчи",
                "рис",
                "спринг ролл с сыром",
                "корн дог",
                "рамен классик"
            ],
            photo: `${Lunch2}`,
            price: 435
        },
        {
            id: 2,
            name: "Сакана Бизнес-ланч",
            ingredients: [
                "том Ям",
                "курица тонкацу",
                "рис",
                "чука",
                "филадельфия классик",
                "сельдерей",
                "специи"
            ],
            photo: `${Lunch}`,
            price: 475
        },
        {
            id: 3,
            name: "Бизнес ланч Sigoi",
            ingredients: [
                "мойва",
                "калифорния классик",
                "рис",
                "том ям"
            ],
            photo: `${Lunch3}`,
            price: 455
        },
        {
            id: 4,
            name: "Бизнес ланч Canno",
            ingredients: [
                "острый суп масака",
                "рис",
                "чука",
                "ростки сои",
                "калифорния с семгой",
                "кимчи"
            ],
            photo: `${Lunch4}`,
            price: 295
        },

        {
            id: 5,
            name: "Бизнес ланч Нихон",
            ingredients: [
                "курица тонкацу",
                "токпоки",
                "тофу",
                "салат",
                "мимо суп"
            ],
            photo: `${Lunch5}`,
            price: 335
        },
        {
            id: 6,
            name: "Бизнес ланч Веган",
            ingredients: [
                "салат чука",
                "кимчи",
                "караи тофу",
                "мисо суп"
            ],
            photo: `${Lunch6}`,
            price: 235
        },
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={lunches} />
        </div>
    );
};

export default BuisnessLunchMenu;





