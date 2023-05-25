import H from "./home.module.css"
import React from "react"
import Column from "../../components/images/JPG/masaka-column.jpg"
import Nav from "../../components/nav/index"


const Home = () => {
    return(
        <div className={H.container}>
            <div className={H.logo}>
                <img className={H.column} src={Column} alt="#" />
            </div>
            <div className={H.box}>
            <div className={H.line}>
            <h1 className="font">Добро пожаловать в Масаку!</h1>
            </div>
            <Nav />

            </div>
        </div>
    )
}
export default Home