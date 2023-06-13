
import React from "react";
import style from "./drinkMenu.module.css";
import Home from "../../Pages/Home/home";

const DrinkMenu = () => {
  
const drinks = [
    {
        id: 1,
        name: "напитки",
        ingr: [
            {
                name: "ice tea каркаде",
                price: 129,
            },
            {
                name: "ice tea зеленый",
                price: 140,
            },
            {
                name: "ice tea черный",
                price: 140,
            },
            {
                name: "bonaqua",
                size: "0,5/1 ",
                price: "50/90"
            },
            {
                name: "cocacola/fanta/sprite",
                size: "0,25/1 ",
                price: "80/160"
            },
            {
                name: "вода с лимоном",
                size: "1 ",
                price: 120
            },
            {
                name: "сок в ассортименте",
                size: "0,25/1 ",
                price: "70/250"
            }
        ]
    },
    {
        id: 2,
        name: "авторские чаи",
        ingr: [
            {
                name: "сады марракеша",
                price: 200
            },
            {
                name: "японский рассвет",
                price: 250
            },
            {
                name: "боро-боро",
                price: 250
            },
            {
                name: "ЯГОДНЫЙ",
                price: 240,
            },
            {
                name: "СМОРОДИНОВЫЙ",
                price: 240,
            },
            {
                name: "ОБЛЕПИХОВЫЙ",
                price: 240,
            },
            {
                name: "ИМБИРНО-ЛИМОННЫЙ",
                price: 240,
            },
            {
                name: "МАРОККАНСКИЙ",
                price: 240,
            },
            {
                name: "МЯТНЫЙ ЧАЙ",
                price: 240,
            },
            {
                name: "ФРУКТОВЫЙ",
                price: 240,
            },
            {
                name: "ТАШКЕНТСКИЙ",
                price: 240,
            },
            {
                name: "ЧЕРНЫЙ / ЗЕЛЕНЫЙ",
                price: 100,
            }
        ]
    },
    {
        id: 3,
        name: "элитные чаи",
        ingr: [
            {
                name: "ТЭ ГУАНЬ ИНЬ",
                price: 150,
            },
            {
                name: "МОЛОЧНЫЙ УЛУН",
                price: 150,
            },
            {
                name: "ЖАСМИНОВЫЙ",
                price: 150,
            },
            {
                name: "ПУ-ЭР",
                price: 150,
            }
        ]
    },
    {
        id: 4,
        name: "свежевыжатые соки",
        ingr: [
            {
                name: "МОРКОВНЫЙ",
                price: 160,
            },
            {
                name: "ЯБЛОЧНЫЙ",
                price: 160,
            },
            {
                name: "ЯБЛОЧНО-МОРКОВНЫЙ",
                price: 160,
            }
        ]
    },
    {
        id: 5,
        name: "лимонады",
        ingr: [
            {
                name: "мэд оранж",
                size: "0,6 ",
                price: 240,
            },
            {
                name: "карибский бриз",
                size: "0,6 ",
                price: 240,
            },
            {
                name: "сприц",
                size: "0,6 ",
                price: 240,
            },
            {
                name: "вишня-клубника",
                size: "1 ",
                price: 290,
            },
            {
                name: "мохито клубничый",
                size: "0,6 ",
                price: 240,
            },
            {
                name: "мохито малиновый",
                size: "0,6 ",
                price: 240,
            },
            {
                name: "МАРАКУЙЯ-МАНГО",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "ГРЕЙФРУТ ЗЕМЛЕНИКА",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "ЯБЛОКО АПЕЛЬСИН",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "МАРАКУЙЯ-МАЛИНА",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "МОХИТО",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "ЧЕРНИЧНЫЙ",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "КИВИ ЛАЙМ",
                size: "04/1 ",
                price: "190/290",
            },
            {
                name: "ТРОПИЧЕСКИЙ",
                size: "04/1 ",
                price: "190/290",
            }
        ]
    },
    {
        id: 6,
        name: "милкшейк",
        ingr: [
            {
                name: "ВАНИЛЬНЫЙ",
                price: 200,
            },
            {
                name: "ШОКОЛАДНО-БАНАНОВЫЙ",
                price: 200,
            },
            {
                name: "ШОКОЛАДНЫЙ",
                price: 200,
            },
            {
                name: "СНИКЕРС-МИЛК",
                price: 200,
            },
            {
                name: "КЛУБНИЧНЫЙ",
                price: 200,
            }
        ]
    },
    {
        id: 7,
        name: "смузи",
        ingr: [
            {
                name: "НЕЖНЫЙ БАНАН",
                price: 200,
            },
            {
                name: "АПЕЛЬСИН ВИШНЯ",
                price: 200,
            },
            {
                name: "ЯГОДНЫЙ",
                price: 200,
            }
        ]
    },
    {
        id: 8,
        name: "детокс",
        ingr: [
            {
                name: "АВОКАДО, ШПИНАТ, БАНАН ",
                price: 190,
            },
            {
                name: "ШПИНАТ, ЛИСТЬЯ САЛАТА, АПЕЛЬСИН",
                price: 190,
            },
            {
                name: "ЗЕЛЕНЫЙ СМУЗИ",
                price: 190,
            }
        ]
    },
    {
        id: 9,
        name: "коктейли",
        ingr: [
            {
                name: "пина колада",
                size: "0,4 ",
                price: 200,
            },
            {
                name: "бабл гам",
                size: "0,4 ",
                price: 230,
            },
            {
                name: "пеликан",
                size: "0,4 ",
                price: 200,
            }
        ]
    },
    {
        id: 10,
        name: "кофе",
        ingr: [
            {
                name: "эспрессо",
                size2: "50 ",
                price: 110,
            },
            {
                name: "double эспрессо",
                size2: "100 ",
                price: 150,
            },
            {
                name: "американо",
                size2: "150/300 ",  
                price: "120/135",
            },
            {
                name: "латте классик",
                size2: "350 ",
                price: 170,            },
            {
                name: "латте шоколадный",
                size2: "350 ",
                price: 220,
            },
            {
                name: "латте карамельный",
                size2: "350 ",
                price: 220,
            },
            {
                name: "капучино",
                size2: "200/350/450 " ,
                price: "145/175/240",
            },
            {
                name: "раф кофе классик",
                size2: "400 ",
                price: 230
            },
            {
                name: "гляссе с кунжутом",
                size2: "250 ",
                price: 220,
            },
            {
                name: "крем-брюле айс кофе",
                size2: "400 ",
                price: 220,
            },
        ]
    }
];


return (
    <div className={style.itemMenu}>
        <Home/>
      <div className={style.itemContainer}>
        {drinks.map((drink) => (
          <div className={style.itemCard} key={drink.id}>
            <h2>{drink.name}</h2>
            <table>
              <tbody>
                {drink.ingr.map((ingrItem, index) => (
                  <tr key={index}>
                    <td className={style.name}>{ingrItem.name}</td>
                    {ingrItem.size && <td>{ingrItem.size}л</td>}
                    {!ingrItem.size && <td></td>}
                    {ingrItem.size2 && <td>{ingrItem.size2}мл</td>}
                    {!ingrItem.size2 && <td></td>}
                    <td>{ingrItem.price}с</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
                
export default DrinkMenu;

