import React from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"
import { HomeStyle , IntroStyle } from "../Styles/Home"

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
        </div>
    )
}
export default Home