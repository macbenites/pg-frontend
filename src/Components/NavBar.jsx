import { MobileIcon, Wrapper, Menu, NavLink } from "../Styles/NavBar";
import { NavItems } from "../Utils/NavBar";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "../Context/authContext";
import Logo from "./Logo";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logOut } = useContext(context);
  const showSidebar = () => setIsOpen(!isOpen);
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };
  return (
    <Wrapper>
      <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
        <Logo />
        <MobileIcon onClick={showSidebar}>
          {isOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </MobileIcon>
        <Menu open={isOpen}>
          {NavItems.map((item) => (
            <NavLink to={item.link} key={item.name} onClick={showSidebar}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
          <div onClick={handleLogOut}>LogOut</div>
        </Menu>
      </IconContext.Provider>
    </Wrapper>
  );
}

export default NavBar;
