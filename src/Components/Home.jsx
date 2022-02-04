import React from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Cards from "./Cards"
import { HomeStyle , IntroStyle, CardsStyle } from "../Styles/Home"

function Home () {
    return (
        <div>
            <HomeStyle>
                <Logo/>
                <NavBar/>
            </HomeStyle>
            <IntroStyle>
                <div>
                    <h4>Hola Yeison</h4>
                    <p>Bienvenido</p>
                </div>
                <input type="text" placeholder="Buscar..."/>
            </IntroStyle>
            <CardsStyle>
                <div>
                <Cards/> 
                </div>
                <div>
                <Cards/>
                </div>
                <div>
                <Cards/>
                </div>
                <div>
                <Cards/>
                </div>
                <div>
                <Cards/>
                </div>
            </CardsStyle>
        </div>
    )
}
export default Home