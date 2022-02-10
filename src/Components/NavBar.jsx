import { NavStyle, NavLink } from "../Styles/NavBar";
import { NavItems } from "../Utils/NavBar";

function NavBar() {
  console.log({ NavItems });
  return (
    <NavStyle>
      {NavItems.map((item) => (
        <NavLink to={item.link} key={item.name}>
          <span>{item.icon}</span>
          {item.name}
        </NavLink>
      ))}
    </NavStyle>
  );
}

export default NavBar;
