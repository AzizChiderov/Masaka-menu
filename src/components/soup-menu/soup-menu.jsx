import React from 'react';
import { Link } from 'react-router-dom';
import './soupMenu.css'

const SoupMenu = () => {
    const soups = [
        {
            id: 1,
            name: "Овощной крем-суп",
            ingredients: [
                "картофель",
                "морковь",
                "лук",
                "помидоры",
                "брокколи",
                "сельдерей",
                "специи"
            ],
            description: "Ароматный и питательный овощной крем-суп с мягкими текстурами и богатым вкусом. Идеальное сочетание свежих овощей и специй.",
            photo: "https://media.istockphoto.com/id/597926666/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%80%D0%B8%D0%B1%D0%BD%D0%BE%D0%B9-%D1%81%D1%83%D0%BF-%D1%81-%D0%BF%D0%B5%D1%82%D1%80%D1%83%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=zwFI5n72C6ppQsUN7Znda4X1HzVAwo36MtueZtw8gYQ=",
            price: 5.99
        },
        {
            id: 2,
            name: "Грибной крем-суп",
            ingredients: [
                "шампиньоны",
                "лук",
                "сметана",
                "перепелиные яйца",
                "соль",
                "перец"
            ],
            description: "Ароматный грибной крем-суп с нежной текстурой и насыщенным вкусом. Идеальное сочетание свежих шампиньонов и сливок.",
            photo: "https://smaylovich.ru/upload/iblock/386/38685c29e962feb6ff89498fda495b3b.jpeg",
            price: 6.99
        },
        {
            id: 3,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 3,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 4,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 5,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 6,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 7,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 8,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 9,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 10,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        },
        {
            id: 11,
            name: "Томатный суп",
            ingredients: [
                "помидоры",
                "лук",
                "морковь",
                "чеснок",
                "базилик",
                "соль",
                "сахар"
            ],
            description: "Ароматный томатный суп с насыщенным вкусом и легкой кислинкой. Идеальное сочетание спелых помидоров и свежих трав.",
            photo: "https://cdn.bahroma1.ru/goods/tom_yam_nov.jpg",
            price: 4.99
        }
    ];

    return (
        <div className="soup-menu">
            <h1>Меню супов</h1>
            <div className="soup-container">
                {soups.map(soup => (
                    <div className="soup-card" key={soup.id}>
                        <Link to={`/soup/${soup.id}`}>
                            <img className="soup-photo" src={soup.photo} alt={soup.name} />
                        </Link>
                        <h2>{soup.name}</h2>
                        <p>Описание: {soup.description}</p>
                        <p className="price">Цена: ${soup.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SoupMenu;