import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Salad1 from "../images/Menu/salad/salad1.png"
import Salad2 from "../images/Menu/salad/salad2.png"
import Salad3 from "../images/Menu/salad/salad3.png"
import Salad4 from "../images/Menu/salad/salad4.png"
import Salad5 from "../images/Menu/salad/salad5.png"
import Salad6 from "../images/Menu/salad/salad6.png"
import Salad7 from "../images/Menu/salad/salad7.png"
import Salad8 from "../images/Menu/salad/salad8.png"
import Salad9 from "../images/Menu/salad/salad9.png"
import Salad10 from "../images/Menu/salad/salad10.png"
import Salad11 from "../images/Menu/salad/salad11.png"
import Salad12 from "../images/Menu/salad/salad12.png"
import Salad13 from "../images/Menu/salad/salad13.png"
import Salad14 from "../images/Menu/salad/salad14.png"
import Salad15 from "../images/Menu/salad/salad15.jpg"
import Salad16 from "../images/Menu/salad/salad16.png"
import Salad17 from "../images/Menu/salad/salad17.jpg"

const SaladMenu = () => {
    const salads = [
        {
            category: "САЛАТЫ",
            id: 1,
            name: "салат с семгой",
            description: "микс из салатов, лоло росса, шпината, авокадо, марокканским кускусом и ореховым соусом",
            photo: `${Salad1}`,
            weight: "300",
            price: 545
        },
        {
            id: 2,
            name: "салат микс с семгой",
            description: "микс из салатов, лоло росса, киноа, слабосоленной семгой, заправленным с сладким масломм и томатом черри",
            photo: `${Salad2}`,
            weight: "300",
            price: 475
        },
        {
            id: 3,
            name: "салат песто",
            description: "свежие брокколи и цветная капуста в кляре с соевым тофу, томатами черри, заправленные соусом песто",
            photo: `${Salad3}`,
            weight: "320",
            price: 265
        },
        {
            id: 4,
            name: "салат пп",
            description: "салат с брокколи и цветной капустой, соевым тофу, маслинами и томатом черри",
            photo: `${Salad4}`,
            weight: "300",
            price: 255
        },
        {
            id: 5,
            name: "битые огурцы",
            description: "битые огурцы по-китайски, заправленным соевым соусом и кунжутным маслом",
            photo: `${Salad5}`,
            weight: "200",
            price: 220
        },
        {
            id: 6,
            name: "салат с руккола с листьями и с курицей",
            description: "салат с ароматным пикантно-островатым вкусом рукколы, жаренным куриным филе в кляре, томатом черри и домашним соусом",
            photo: `${Salad6}`,
            weight: "340",
            price: 325
        },
        {
            id: 7,
            name: "салат с курицей и с киноа",
            description: "микс из салатов, лоло росса, киноа, заправленным сладким маслом и томатом черри",
            photo: `${Salad7}`,
            weight: "300",
            price: 365
        },
        {
            id: 8,
            name: "салат цезарь с креветками",
            description: "легендарный салат с креветками под соусом цезарь, выбор ценителей изыска",
            photo: `${Salad8}`,
            weight: "340",
            price: 385
        },
        {
            id: 9,
            name: "салат греческий",
            ingredients: [
                "помидоры",
                "огурцы",
                "маслины",
                "сыр фетакса",
                "красный лук",
                "микс салата", "оливковое масло"
            ],
            photo: `${Salad9}`,
            weight: "290",
            price: 325
        },
        {
            id: 10,
            name: "хрустящий баклажан",
            ingredients: [
                "баклажан",
                "томат черри",
                "микс салата",
                "древесные грибы",
                "соус свит чили"
            ],
            photo: `${Salad10}`,
            weight: "250",
            price: 325
        },
        {
            id: 11,
            name: "баклажан со свит чили",
            description: "жареные баклажанные палочки в кисло-сладком соусе",
            photo: `${Salad11}`,
            weight: "250",
            price: 320
        },
        {
            id: 12,
            name: "салат чука с семгой",
            ingredients: [
                "чука",
                "семга",
                "ореховый соус",
                "кунжут"
            ],
            photo: `${Salad12}`,
            weight: "180",
            price: 395
        },
        {
            id: 13,
            name: "летний салат с манговой заправкой",
            ingredients: [
                "помидоры",
                "шпинат",
                "листья салата",
                "огурцы",
                "лук красный",
                "кедровые орешки",
                "манговая заправка"
            ],
            photo: `${Salad13}`,
            weight: "290",
            price: 325
        },
        {
            id: 14,
            name: "моящи",
            description: "салат с ростками фасоли со шпинатом, заправленное кунжутным маслом и травяным бульоном",
            photo: `${Salad14}`,
            weight: "110",
            price: 170
        },
        {
            id: 15,
            name: "острая фасоль в кляре",
            ingredients: [
                "стручковая фасоль",
                "перец"
            ],
            photo: `${Salad15}`,
            weight: "220",
            price: 255
        },
        {
            id: 16,
            name: "Кимчи",
            photo: `${Salad16}`,
            weight: "80",
            price: 100
        },
        {
            id: 17,
            name: "пак-чой",
            description: "китайская листовая капуста. обжаренная в чесноке, с соевым соусом",
            photo: `${Salad17}`,
            weight: "290",
            price: 315
        }
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={salads} />
        </div>
    );
};

export default SaladMenu;




