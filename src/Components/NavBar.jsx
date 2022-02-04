import { NavStyle, NavLink } from "../Styles/NavBar";

function NavBar() {
  return (
    <NavStyle>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/reverse">Reserve</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </NavStyle>
  );
}

export default NavBar;
