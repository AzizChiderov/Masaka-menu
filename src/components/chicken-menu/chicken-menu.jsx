import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Chicken1 from "../images/Menu/chicken/chicken1.png"
import Chicken2 from "../images/Menu/chicken/chicken2.png"
import Chicken3 from "../images/Menu/chicken/chicken3.png"
import Chicken4 from "../images/Menu/chicken/chicken4.png"
import Chicken5 from "../images/Menu/chicken/chicken5.png"
import Chicken6 from "../images/Menu/chicken/chicken6.png"
import Chicken7 from "../images/Menu/chicken/chicken7.png"
import Chicken8 from "../images/Menu/chicken/chicken8.png"
import Chicken9 from "../images/Menu/chicken/chicken9.png"
import Chicken10 from "../images/Menu/chicken/chicken10.png"
import Chicken11 from "../images/Menu/chicken/chicken11.png"
import Chicken12 from "../images/Menu/chicken/chicken12.png"
import Chicken13 from "../images/Menu/chicken/chicken13.png"
import Chicken14 from "../images/Menu/chicken/chicken14.png"
import Chicken15 from "../images/Menu/chicken/chicken15.png"
import Chicken16 from "../images/Menu/chicken/chicken16.png"
import Chicken17 from "../images/Menu/chicken/chicken17.png"
import Chicken18 from "../images/Menu/chicken/chicken18.png"
import Chicken19 from "../images/Menu/chicken/chicken19.png"
import Chicken20 from "../images/Menu/chicken/chicken20.png"
import Chicken21 from "../images/Menu/chicken/chicken21.png"
import Chicken22 from "../images/Menu/chicken/chicken22.png"

const ChickenMenu = () => {
    const chickens = [
        {
            category: "БЛЮДА С КУРИЦЕЙ",
            id: 1,
            name: "цыпленок под деревенским соусом",            
            description: "запеченное филе цыпленка со свежими листьями салата, под деревенским соусом",
            photo: `${Chicken1}`,
            price: 405,
            weight: 390
        },
        {
            id: 2,
            name: "утиная грудка в ягодном соусе",
            description: "утиное филе приготовленноое по-домашнему с листьями салата и томатом черри, заправленное ягодным соусом",
            photo: `${Chicken2}`,
            price: 550,
            weight: 320
        },
        {
            id: 3,
            name: "тай чиккен свит карри",
            description: "нежное куриное филе, с овощами и соусом карри со сладким оттенком меда",
            photo: `${Chicken3}`,
            price: 335,
            weight: 390
        },
        {
            id: 4,
            name: "спайс чикен",
            description: "яркий, насыщенный кисло-островатый вкус куриного мяса,с пикантной остринкой и овощами",
            photo: `${Chicken4}`,
            price: 335,
            weight: 390
        },
        {
            id: 5,
            name: "запченный цыплеок с кус кус",
            description: "сочный цыпленок с ароматными специями, с марокканским кускусом и соусом терияки",
            photo: `${Chicken5}`,
            price: 435,
            weight: 390
        },
        {
            id: 6,
            name: "терияки",
            description: "кусочки куриного филе в соусе терияки, с битыми огурцами, подается с рисом",
            photo: `${Chicken6}`,
            price: 255,
            weight: 290
        },
        {
            id: 7,
            name: "корн-дог с сыром",
            description: "",
            photo: `${Chicken7}`,
            price: 110
        },
        {
            id: 8,
            name: "куриные нагетсы",
            photo: `${Chicken8}`,
            price: 295,
            weight: 220
        },
        {
            id: 9,
            name: "курица тонкацу",
            photo: `${Chicken9}`,
            price: 285,
            weight: 280
        },
        {
            id: 10,
            name: "ощи сет",
            description: "азиатский набор из хрустящей курицы, тофу в кисло-остром соусе, риса и корейского кимчи",
            photo: `${Chicken10}`,
            price: 245,
            weight: 220
        },
        {
            id: 11,
            name: "курица в кисло-сладком соусе",
            photo: `${Chicken11}`,
            price: 335,
            weight: 320
        },
        {
            id: 12,
            name: "спринг ролл с сыром",            
            photo: `${Chicken12}`,
            price: 180,
            weight: 110
        },
        {
            id: 13,
            name: "спринг ролл с курицей",            
            photo: `${Chicken13}`,
            price: 420,
            weight: 110
        },
        {
            id: 14,
            name: "курица в кисло-остром соусе",            
            photo: `${Chicken14}`,
            price: 405,
            weight: 390
        },
        {
            id: 15,
            name: "карридон",            
            description: "курица обжаренная с овощами, с заправкой тайского карри",
            photo: `${Chicken15}`,
            price: 295,
            weight: 350
        },
        {
            id: 16,
            name: "крылышки с лапшой",            
            description: "острые крылышки с тонкой лапшой в сливочном соусе",
            photo: `${Chicken16}`,
            price: 375,
            weight: 380
        },
        {
            id: 17,
            name: "крылышки с тяханом",            
            description: "крылышки в кисло-остром / кисло-сладком соусе, рисом тяхан",
            photo: `${Chicken17}`,
            price: 365,
            weight: 350
        },
        {
            id: 18,
            name: "чикен нудл",            
            description: "обжаренная курица в соусе терияки, ис овощами в кунжутном соусе",
            photo: `${Chicken18}`,
            price: 405,
            weight: 390
        },
        {
            id: 19,
            name: "крылышки фри",            
            photo: `${Chicken19}`,
            price: 335,
            weight: 320
        },
        {
            id: 20,
            name: "КАРРИ-РАЙС",            
            description: "одно из самых популярных блюд азии, карри с нежной курицей в кляре",
            photo: `${Chicken20}`,
            price: 345,
            weight: 350
        },
        {
            id: 21,
            name: "ЧИКЕН ОЯКОДОН",            
            description: "японская курица в кляре с соусом оякодон, яйцом и жаренным луком",
            photo: `${Chicken21}`,
            price: 250,
            weight: 380
        },
        {
            id: 22,
            name: "КУРИЦА КАРААГЕ",            
            description: "куриные бедра, чеснок, имбирь, панировка",
            photo: `${Chicken22}`,
            price: 295,
            weight: 220
        },
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={chickens} />
    </div>
  );
};

export default ChickenMenu;




