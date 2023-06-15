import React from 'react';
import '../item-menu/item-menu.css'
import { ItemMenu } from "../item-menu/item-menu";
import backedRoll1 from '../images/Menu/baked-roll/baked-roll1.png'
import backedRoll2 from '../images/Menu/baked-roll/baked-roll2.png'
import backedRoll3 from '../images/Menu/baked-roll/baked-roll3.png'
import backedRoll4 from '../images/Menu/baked-roll/baked-roll4.png'
import backedRoll5 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import backedRoll6 from '../images/Menu/baked-roll/baked-roll6.png'
import backedRoll7 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import backedRoll8 from '../images/Menu/baked-roll/MASAKA SUSHI.png'
import backedRoll9 from '../images/Menu/baked-roll/baked-roll9.jpg'
import backedRoll10 from '../images/Menu/baked-roll/baked-roll10.jpg'

const BakedRollsMenu = () => {
    const bakedRolls = [
        {
            category: "ЗАПЕЧЕННЫЕ РОЛЛЫ",
            id: 1,
            name: "Ролл гейша",
            description: " нежный сыр тобико огурцы семга угорь, соус ширача.",
            photo: `${backedRoll1}`,
            price: 545,
            weight: 250
        },
        {
            id: 2,
            name: "Масака хот",
            description: " нежный сыр, омлет, куриное филе, огурцы, кунжут, фирменный соус .",
            photo: `${backedRoll2}`,
            price: 395,
            weight: 270
        },
        {
            id: 3,
            name: "Тортилья запеченная",
            description: "тортилья , куриное филе, нежный сыр, листья салата, зеленный  лук, фирменный соус.",
            photo: `${backedRoll3}`,
            price: 295,
            weight: 270
        },
        {
            id: 4,
            name: "Аомори",
            description: " жаренная семга, нежный сыр, огурец  тобико масака соус.",
            photo: `${backedRoll4}`,
            price: 415,
            weight: 255
        },
        {
            id: 5,
            name: "ГОДЗИЛЛА",
            description: "тигровая креветка, нежный сыр, тобико, масака соус.",
            photo: `${backedRoll9}`,
            price: 475,
            weight: 260
        },
        {
            id: 6,
            name: "АРИГАТО",
            description: "угорь, снежный краб, авокадо, нежный сыр, кунжут, масака соус.",
            photo: `${backedRoll6}`,
            price: 485,
            weight: 275

        },
        {
            id: 7,
            name: "ДАМА В КРАСНОМ",
            description: "семга, снежный краб, огурец. нежный сыр, тобико, масака соус.",
            photo: `${backedRoll10}`,
            price: 405,
            weight: 290
        },
        {
            id: 8,
            name: "ЧЕРНЫЙ ЖЕМЧУГ",
            description: "семга, снежный краб, нежный сыр, тобико, огурец, кунжут, масака соус.",
            photo: `${backedRoll8}`,            
            price: 395,
            weight: 290
        },
    ];

    return (
        <div className="item-menu">
            <ItemMenu items={bakedRolls} />
        </div>
    );
};

export default BakedRollsMenu;








