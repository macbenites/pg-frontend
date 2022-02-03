import { Link } from "react-router-dom"
import { NavStyle , pNavStyle } from "../Styles/NavBar"

function NavBar () {

    return (
        <NavStyle>
            <Link to="/home"><p>Home</p></Link>
            <Link to="/reverse"><p>Reserve</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/products"><p>Products</p></Link>
        </NavStyle>
    )
}

export default NavBar