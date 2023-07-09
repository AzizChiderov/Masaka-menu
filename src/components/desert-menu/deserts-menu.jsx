import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";


const DesertMenu = () => {
  const deserts = menuData.deserts;

  return (
    <div className="item-menu">
      <ItemMenu items={deserts} />
    </div>
  );
};

export default DesertMenu;




