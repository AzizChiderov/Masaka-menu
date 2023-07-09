import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";


const Fishmenu = () => {
    const fishs = menuData.fishs;

  return (
    <div className="item-menu">
      <ItemMenu items={fishs} />
    </div>
  );
};

export default Fishmenu;




