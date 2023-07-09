import React from 'react';
import '../item-menu/item-menu.css'
import { ItemMenu } from "../item-menu/item-menu";
import menuData from "../menuData.json";

const BakedRollsMenu = () => {
    const bakedRolls = menuData.bakedRolls;

    return (
        <div className="item-menu">
            <ItemMenu items={bakedRolls} />
        </div>
    );
};

export default BakedRollsMenu;








