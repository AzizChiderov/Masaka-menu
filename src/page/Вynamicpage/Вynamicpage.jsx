import React from 'react';
import { useLocation } from 'react-router-dom';
import menuData from "../../menuData.json";
import './Вynamicpage.css'
import Item from "../../components/Item/Item"

const Вynamicpage = () => {
  const location = useLocation();
  const path = location.pathname;
  const words = path.split('/').filter(word => word !== '');
  const lastWords = words[words.length - 1].split('-').join('');
  const bakedRolls = menuData[lastWords];
  console.log(lastWords);
  return (
     <div className="item-menu">
         <Item items={bakedRolls} />
     </div>
  );
}

export default Вynamicpage;