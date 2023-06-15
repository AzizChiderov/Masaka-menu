import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Roll1 from "../images/Menu/rolls/roll1.png"
import Roll2 from "../images/Menu/rolls/roll2.png"
import Roll3 from "../images/Menu/rolls/roll3.png"
import Roll4 from "../images/Menu/rolls/roll4.png"
import Roll5 from "../images/Menu/rolls/roll5.png"
import Roll6 from "../images/Menu/rolls/roll6.png"
import Roll7 from "../images/Menu/rolls/roll7.png"
import Roll8 from "../images/Menu/rolls/roll8.png"
import Roll9 from "../images/Menu/rolls/roll9.png"
import Roll10 from "../images/Menu/rolls/roll10.png"
import Roll11 from "../images/Menu/rolls/roll11.png"
import Roll12 from "../images/Menu/rolls/roll12.png"
import Roll13 from "../images/Menu/rolls/roll13.png"
import Roll14 from "../images/Menu/rolls/roll14.png"
import Roll15 from "../images/Menu/rolls/roll15.png"
import Roll16 from "../images/Menu/rolls/roll16.png"
import Roll17 from "../images/Menu/rolls/roll17.jpg"
import Roll18 from "../images/Menu/rolls/roll18.jpg"
import Roll19 from "../images/Menu/rolls/roll19.jpg"
import Roll20 from "../images/Menu/rolls/roll20.jpg"
import Roll21 from "../images/Menu/rolls/roll21.png"
import Roll22 from "../images/Menu/rolls/roll22.jpg"
import Roll23 from "../images/Menu/rolls/roll23.jpg"
import Roll24 from "../images/Menu/rolls/roll24.jpg"
import Roll25 from "../images/Menu/rolls/roll25.png"
import Roll26 from "../images/Menu/rolls/roll26.png"
import Roll27 from "../images/Menu/rolls/roll27.png"
import Roll28 from "../images/Menu/rolls/roll28.png"
import Roll29 from "../images/Menu/rolls/roll29.png"
import Roll30 from "../images/Menu/rolls/roll30.png"
import Roll31 from "../images/Menu/rolls/roll31.png"
import Roll32 from "../images/Menu/rolls/roll32.png"
import Roll33 from "../images/Menu/rolls/roll33.png"
import Roll34 from "../images/Menu/rolls/roll34.png"
import Roll35 from "../images/Menu/rolls/roll35.png"
import Roll36 from "../images/Menu/rolls/roll36.png"
import Roll37 from "../images/Menu/rolls/roll37.png"
import Roll38 from "../images/Menu/rolls/roll38.png"
import Roll39 from "../images/Menu/rolls/roll39.png"
import Roll40 from "../images/Menu/rolls/roll40.png"
import Roll41 from "../images/Menu/rolls/roll41.png"


const RollMenu = () => {
    const rolls = [
        {
            category: "РОЛЛЫ",
            id: 1,
            name: "ролл без риса",
            ingredients: [
                "лосось",
                "томаго",
                "огурец",
                "снежный краб",
                "салатные листья",
                "сыр творожный"
            ],
            photo: `${Roll1}`,
            weight: "200",
            price: 495
        },
        {
            id: 2,
            name: "тори маки",
            ingredients: [
                "помидор",
                "нежный сыр",
                "куриное филе",
                "масаго"
            ],
            photo: `${Roll2}`,
            weight: "220",
            price: 235
        },
        {
            id: 3,
            name: "темпура саке",
            ingredients: [
                "нежный сыр",
                "лосось",
                "огурец",
                "унаги",
                "спайси соус"
            ],
            photo: `${Roll3}`,
            weight: "250",
            price: 325
        },
        {
            id: 4,
            name: "ролл роял",
            ingredients: [
                "микс кунжута",
                "нежный сыр",
                "копченная курица",
                "огурец",
                "лосось"
            ],
            photo: `${Roll4}`,
            weight: "280",
            price: 355
        },
        {
            id: 5,
            name: "томаго маки",
            ingredients: [
                "японский омлет",
                "креветки",
                "авокадо",
                "нежный сыр",
                "унаги соус",
                "кунжут"
            ],
            photo: `${Roll5}`,
            weight: "280",
            price: 295
        },
        {
            id: 6,
            name: "ролл хакайдо",
            ingredients: [
                "хрустящие креветки",
                "авокадо",
                "масаго",
                "унаги",
                "спайси соус"
            ],
            photo: `${Roll6}`,
            weight: "220",
            price: 325
        },
        {
            id: 7,
            name: "ролл матия",
            ingredients: [
                "нежный сыр",
                "авокадо",
                "снежный краб",
                "тунец",
                "сыр чедер",
                "унаги соус"
            ],
            photo: `${Roll7}`,
            weight: "255",
            price: 425
        },
        {
            id: 8,
            name: "ролл токиа",
            ingredients: [
                "японский омлет",
                "огурец",
                "нежный сыр",
                "лосось"
            ],
            photo: `${Roll8}`,
            weight: "280",
            price: 435
        },
        {
            id: 9,
            name: "темпура лосось",
            ingredients: [
                "помидор",
                "нежный сыр",
                "болгарский перец",
                "масаго",
                "лосось",
                "соус сливочный"
            ],
            photo: `${Roll9}`,
            weight: "280",
            price: 275
        },
        {
            id: 10,
            name: "тар тар ролл",
            ingredients: [
                "жаренный лосось",
                "помидор",
                "нежный сыр",
                "тунец",
                "соус сливочный",
                "унаги",
                "спайси"
            ],
            photo: `${Roll10}`,
            weight: "270",
            price: 395
        },
        {
            id: 11,
            name: "ролл панко",
            ingredients: [
                "нежный сыр",
                "копченная курица",
                "спайси соус"
            ],
            photo: `${Roll11}`,
            weight: "220",
            price: 225
        },
        {
            id: 12,
            name: "татами",
            ingredients: [
                "нежный сыр",
                "огурец",
                "хрустящая креветка",
                "болгарский перец",
                "спайси",
                "соус"
            ],
            photo: `${Roll12}`,
            weight: "250",
            price: 235
        },
        {
            id: 13,
            name: "ойси",
            ingredients: [
                "нежный сыр",
                "лосось",
                "листья салата",
                "масаго",
                "спайси соус"
            ],
            photo: `${Roll13}`,
            weight: "220",
            price: 305
        },
        {
            id: 14,
            name: "чиз ролл",
            ingredients: [
                "снежный краб",
                "омлет",
                "спайси соус",
                "сыр чедер"
            ],
            photo: `${Roll14}`,
            weight: "220",
            price: 225
        },
        {
            id: 15,
            name: "сакаи темпура",
            ingredients: [
                "лосось",
                "угорь",
                "нежный сыр",
                "салатыне листья",
                "соус сливочный"
            ],
            photo: `${Roll15}`,
            weight: "150",
            price: 425
        },
        {
            id: 16,
            name: "темпура унаги",
            ingredients: [
                "нежный сыр",
                "угорь",
                "огурец",
                "унаги",
                "спайси соус"
            ],
            photo: `${Roll16}`,
            weight: "230",
            price: 275
        },
        {
            id: 17,
            name: "запеченный унаги",
            ingredients: [
                "огурец",
                "жареный лосось",
                "нежный сыр",
                "угорь",
                "спайси соус"
            ],
            photo: `${Roll17}`,
            weight: "230",
            price: 445
        },
        {
            id: 18,
            name: "жаренная чука",
            ingredients: [
                "нежный сыр",
                "чука",
                "масаго",
                "унаги",
                "спайси соус"
            ],
            photo: `${Roll18}`,
            weight: "225",
            price: 275
        },
        {
            id: 19,
            name: "калифорния классик",
            ingredients: [
                "авокадо",
                "огурец",
                "снежный краб",
                "тобико"
            ],
            photo: `${Roll19}`,
            weight: "250",
            price: 295
        },
        {
            id: 20,
            name: "филадельфия классик",
            ingredients: [
                "нежный сыр",
                "семга",
                "огурец"
            ],
            photo: `${Roll20}`,
            weight: "280",
            price: 425
        },
        {
            id: 21,
            name: "калифорния люкс",
            ingredients: [
                "тигровые креветки",
                "авокадо",
                "нежный сыр",
                "тобико"
            ],
            photo: `${Roll21}`,
            weight: "250",
            price: 395
        },
        {
            id: 22,
            name: "филадельфия люкс",
            ingredients: [
                "семга",
                "нежный сыр",
                "огурец",
                "игра семги",
                "лук зеленый"
            ],
            photo: `${Roll22}`,
            weight: "290",
            price: 535
        },
        {
            id: 41,
            name: "филадельфия с крабом",
            ingredients: [
                "семга",
                "снежный краб",
                "нежный сыр",
                "тобико",
                "спайси соус"
            ],
            photo: `${Roll41}`,
            weight: "260",
            price: 415
        },
        {
            id: 23,
            name: "калифорния с семгой",
            ingredients: [
                "нежный сыр",
                "огурец",
                "семга",
                "тобико"
            ],
            photo: `${Roll23}`,
            weight: "250",
            price: 325
        },
        {
            id: 24,
            name: "филадельфия маки",
            ingredients: [
                "нежный сыр",
                "семга",
                "лук зеленый"
            ],
            photo: `${Roll24}`,
            weight: "275",
            price: 530
        },
        {
            id: 25,
            name: "литтл масака",
            ingredients: [
                "тобико",
                "авокадо",
                "семга",
                "снежный краб",
                "угорь",
                "стужка тунца",
                "сыр",
                "соус унаги"
            ],
            photo: `${Roll25}`,
            weight: "250",
            price: 365
        },
        {
            id: 26,
            name: "лава",
            ingredients: [
                "нежный сыр",
                "снежный краб",
                "семга",
                "огурец",
                "лава"
            ],
            photo: `${Roll26}`,
            weight: "330",
            price: 375
        },
        {
            id: 27,
            name: "фуджи",
            ingredients: [
                "сыр",
                "копченный лосось",
                "огурец"
            ],
            photo: `${Roll27}`,
            weight: "250",
            price: 305
        },
        {
            id: 28,
            name: "дует",
            ingredients: [
                "листья салата",
                "тобико",
                "сыр"
            ],
            photo: `${Roll28}`,
            weight: "250",
            price: 485
        },
        {
            id: 29,
            name: "бостон",
            ingredients: [
                "тунец",
                "кунжут",
                "тобико",
                "нежный сыр",
                "авокадо",
                "икра семги"
            ],
            photo: `${Roll29}`,
            weight: "240",
            price: 365
        },
        {
            id: 30,
            name: "каролина",
            ingredients: [
                "угорь",
                "нежный сыр",
                "семга",
                "огурец",
                "унаги соус"
            ],
            photo: `${Roll30}`,
            weight: "270",
            price: 515
        },
        {
            id: 31,
            name: "унаги филка",
            ingredients: [
                "угорь",
                "нежный сыр",
                "огурец",
                "унаги соус"
            ],
            photo: `${Roll31}`,
            weight: "280",
            price: 465
        },
        {
            id: 32,
            name: "магуро",
            ingredients: [
                "тунец",
                "снежный краб",
                "авокадо",
                "огурец",
                "спайси соус",
                "кунжут"
            ],
            photo: `${Roll32}`,
            weight: "260",
            price: 315
        },
        {
            id: 33,
            name: "тайгер",
            ingredients: [
                "тигровая креветка",
                "нежный сыр",
                "семга",
                "лимон"
            ],
            photo: `${Roll33}`,
            weight: "280",
            price: 475
        },
        {
            id: 34,
            name: "тортилья веган",
            ingredients: [
                "нежный сыр",
                "лист салата",
                "огурец",
                "болгарский перец",
                "помидор"
            ],
            photo: `${Roll34}`,
            weight: "200",
            price: 205
        },
        {
            id: 35,
            name: "тортилья с семгой",
            ingredients: [
                "нежный сыр",
                "лист салата",
                "огурец",
                "лук зеленый",
                "семга"
            ],
            photo: `${Roll35}`,
            weight: "280",
            price: 295  
        },
        {
            id: 36,
            name: "дракон люкс",
            ingredients: [
                "нежный сыр",
                "авокадо",
                "тигровая креветки",
                "угорь",
                "тобико"
            ],
            photo: `${Roll36}`,
            weight: "250",
            price: 575
        },
        {
            id: 37,
            name: "дракон",
            ingredients: [
                "снежный краб",
                "угорь",
                "авокадо",
                "огурец",
                "кунжут",
                "унаги соус"
            ],
            photo: `${Roll37}`,
            weight: "250",
            price: 485
        },
        {
            id: 38,
            name: "краб креветка",
            ingredients: [
                "нежный сыр",
                "краб",
                "тигровая креветка",
                "кунжут",
                "спайси соус"
            ],
            photo: `${Roll38}`,
            weight: "250",
            price: 285
        },
        {
            id: 39,
            name: "хрустящий ролл",
            ingredients: [
                "угорь",
                "нежный сыр",
                "помидор",
                "чипсы",
                "спайси соус"
            ],
            photo: `${Roll39}`,
            weight: "220",
            price: 315
        },
        {
            id: 40,
            name: "камикадзе",
            ingredients: [
                "семга",
                "угорь",
                "перец болгарский",
                "салат чука",
                "нежный сыр",
                "тобико",
                "спайси соус"
            ],
            photo: `${Roll40}`,
            weight: "250",
            price: 585
        }
    ];

  return (
    <div className="item-menu">
      <ItemMenu items={rolls} />
    </div>
  );
};

export default RollMenu;




