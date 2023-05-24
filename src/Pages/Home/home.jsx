import React from "react";
import H from "./home.module.css"
import Column from "../../components/images/JPG/masaka-column.jpg"

const Home = () => {
    return (
        <div className={H.container}>
            <div className={H.logo}>
            <img className={H.column} src={Column} alt="#" />
            </div>
            <div className={H.line}>
            <h1 className="font-bold">Добро пожаловать в Масаку!</h1>
            </div>
        </div>
    )
}
export default Home