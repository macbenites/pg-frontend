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
                    <h4>Hello Yeison</h4>
                    <p>Welcome Back</p>
                </div>
                <input type="text" placeholder="Search..."/>
            </IntroStyle>
        </div>
    )
}
export default Home