import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import menuData from "../../menuData.json";
import './Вynamicpage.css'
import Item from "../../components/Item/Item"
// import Bg from '../../image/JPG/itemBg.jpg'
import Loader from '../../components/Loader/Loader';

const Вynamicpage = () => {
  const location = useLocation();
  const path = location.pathname;
  const words = path.split('/').filter(word => word !== '');
  const lastWords = words[words.length - 1].split('-').join('');
  const bakedRolls = menuData[lastWords];
  console.log(lastWords);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
     <div className="item-menu">
        {loading ? <Loader /> : <Item items={bakedRolls} />}
     </div>
  );
}

export default Вynamicpage;