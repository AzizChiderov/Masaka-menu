import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Snack1 from "../images/Menu/snack/snack1.png"
import Snack2 from "../images/Menu/snack/snack2.png"
import Snack3 from "../images/Menu/snack/snack3.png"
import Snack4 from "../images/Menu/snack/snack4.png"
import Snack5 from "../images/Menu/snack/snack5.png"
import Snack6 from "../images/Menu/snack/snack6.png"
import Snack7 from "../images/Menu/snack/snack7.png"
import Snack8 from "../images/Menu/snack/snack8.png"
import Snack9 from "../images/Menu/snack/snack9.png"

const SnackMenu = () => {
    const snacks = [
        {
            id: 1,
            name: "блюдо сями императорская трапеза",
            description: "Сями традиционное корейское блюдо, который состоит из свежих ингридиентов. Контраст вкуса собранного сета дает незабываемое ощущение",
            photo: `${Snack1}`,
            weight: "330",
            price: 525
        },
        {
            id: 2,
            name: "грибы эноки в кисло-острома соусе",
            description: "Полезные и вкусные грибы эноки приготовленные в кисло-остром соусе",
            photo: `${Snack2}`,
            weight: "250",
            price: 385
        },
        {
            id: 3,
            name: "гедза жареные ",
            description: "На выбор: гедза с курицей и жусай/ гедза с курицей и зеленымм луком",
            photo: `${Snack3}`,
            weight: "200",
            price: 245
        },
        {
            id: 4,
            name: "яки гедза с соусом милан",
            description: "На выбор: гедза с курицей и жусай/гедза с курицей и зеленым луком",
            photo: `${Snack4}`,
            weight: "200",
            price: 255
        },
        {
            id: 5,
            name: "судак в кисло-сладком",
            description: "Судак в кисло-сладком с баклажанами",
            photo: `${Snack5}`,
            weight: "250",
            price: 415
        },
        {
            id: 6,
            name: "токпоки",
            description: "Одно из самых популярных блюд Южной Кореи. Рисовые клецки в сладко-остром соусе",
            photo: `${Snack6}`,
            weight: "220",
            price: 295
        },
        {
            id: 7,
            name: "запеченные мидии",
            description: "Запеченные мидии с соусом спайси",
            photo: `${Snack7}`,
            weight: "200",
            price: 515
        },
        {
            id: 8,
            name: "кесадилья с курицей",
            description: "Кесадилья с курицей в сливочном соусе и грибами, с прослойкой из нежного сыра",
            photo: `${Snack8}`,
            weight: "230",
            price: 355
        },
        {
            id: 9,
            name: "кесадилья с креветками",
            description: "Кесадилья с креветками в сливочном соусе и грибами, с прослойкой из нежного сыра",
            photo: `${Snack9}`,
            weight: "210",
            price: 405
        }
    ];

  return (
    <div className="item-menu">
      <h1>ЗАКУСКИ</h1>
      <ItemMenu items={snacks} />
    </div>
  );
};

export default SnackMenu;




