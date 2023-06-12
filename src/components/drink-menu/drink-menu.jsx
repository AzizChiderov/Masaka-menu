
import React from "react";
import style from "./drinkMenu.module.css";

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
                size: "0,5/1",
                price: "50/90"
            },
            {
                name: "cocacola/fanta/sprite",
                size: "0,25/1",
                price: "80/160"
            },
            {
                name: "вода с лимоном",
                size: "1",
                price: 120
            },
            {
                name: "сок в ассортименте",
                size: "0,25/1",
                price: "70/250"
            }
        ]
    },
    {
        id: 2,
        name: "авторские чаи",
        ingr: [
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
                name: "МАРАКУЙЯ-МАНГО",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "ГРЕЙФРУТ ЗЕМЛЕНИКА",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "ЯБЛОКО АПЕЛЬСИН",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "МАРАКУЙЯ-МАЛИНА",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "МОХИТО",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "ЧЕРНИЧНЫЙ",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "КИВИ ЛАЙМ",
                size: "04/1",
                price: "190/290",
            },
            {
                name: "ТРОПИЧЕСКИЙ",
                size: "04/1",
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
    }
];


return (
    <div className={style.itemMenu}>
      <div className={style.itemContainer}>
        {drinks.map((drink) => (
          <div className={style.itemCard} key={drink.id}>
            <h2>{drink.name}</h2>
            <table>
              <tbody>
                {drink.ingr.map((ingrItem, index) => (
                  <tr key={index}>
                    <td className={style.name}>{ingrItem.name}</td>
                    {ingrItem.size && <td className={style.name}>{ingrItem.size}л</td>}
                    {!ingrItem.size && <td></td>}
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

