import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";


const ChickenMenu = () => {
    const chickens = menuData.chickens;

    return (
        <div className="item-menu">
            <ItemMenu items={chickens} />
        </div>
    );
};

export default ChickenMenu;




