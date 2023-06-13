import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Wok1 from "../images/Menu/wok/wok1.png"
import Wok2 from "../images/Menu/wok/wok2.png"
import Wok3 from "../images/Menu/wok/wok3.png"
import Wok4 from "../images/Menu/wok/wok4.png"

const WokMenu = () => {
    const woks = [
        {
            category: "ВОКИ",
            id: 1,
            name: "вок с морепродуктами",
            description: "стеклянная лапша фунчоза с морепродуктами и овощами. Подается с устричным пикантным соусом шрирача",
            photo: `${Wok1}`,
            weight: "300",
            price: 405
        },
        {   
            id: 2,
            name: "вок с курицей",
            ingredients: [
                "курица",
                "овощи",
                "лапша удон",
            ],
            weight: "320",
            price: 305,
            name2: "вок с говядиной",
            ingredients2: [
                "говядина",
                "овощи",
                "лапша удон",
            ],
            photo: `${Wok2}`,
            weight2: "320",
            price2: 375
        },
        {
            id: 3,
            name: "вок с курицей в сливочном соусе",
            ingredients: [
                "курица",
                "лапша удон",
                "овощи и",
                "сливочно острый соус",
            ],
            photo: `${Wok3}`,
            weight: "320",
            price: 305
        },
        {
            id: 4,
            name: "жаренный рамен",
            photo: `${Wok4}`,
            weight: "350",
            price: 345
        }
    ];


    return (
 <div className="item-menu">
      <ItemMenu items={woks} />
    </div>
    );
};

export default WokMenu;




