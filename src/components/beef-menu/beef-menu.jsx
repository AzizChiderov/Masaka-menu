import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";

const BeefMenu = () => {
    const beefs = menuData.beefs;

    return (
        <div className="item-menu">
            <ItemMenu items={beefs} />
        </div>
    );
};

export default BeefMenu;






