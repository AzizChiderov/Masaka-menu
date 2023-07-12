import React,{useState,useEffect} from 'react';
import menuData from "../../menuData.json";
import style from './Drinkspage.module.css'

const Drinkspage = () => {
  const [drinks,setDrinks] = useState([])
  useEffect(() => {
    setDrinks(menuData.drinks)
  }, [])
  
  return (
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
  );
}

export default Drinkspage;