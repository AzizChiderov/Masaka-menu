import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";

const BuisnessLunchMenu = () => {
    const lunches = menuData.lunches;

    return (
        <div className="item-menu">
            <ItemMenu items={lunches} />
        </div>
    );
};

export default BuisnessLunchMenu;





