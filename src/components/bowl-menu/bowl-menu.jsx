import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";

const BowlMenu = () => {
  const bowls = menuData.bowls;

  return (
    <div className="item-menu">
      <ItemMenu items={bowls} />
    </div>
  );
};

export default BowlMenu;
