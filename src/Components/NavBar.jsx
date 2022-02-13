import { MobileIcon, Wrapper, Menu, NavLink } from "../Styles/NavBar";
import { NavItems } from "../Utils/NavBar";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { LinkTo } from "../Styles/reusable/LinkTo";

import Logo from "./Logo";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSidebar = () => setIsOpen(!isOpen);
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <Wrapper>
      <IconContext.Provider value={{ style: { fontSize: "2rem" } }}>
        <Logo />
        <MobileIcon onClick={showSidebar}>
          {isOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </MobileIcon>
        <Menu open={isOpen}>
          {NavItems.map((item) => (
            <LinkTo key={item.name} to={item.link}>
              <NavLink key={item.name} onClick={showSidebar}>
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </LinkTo>
          ))}
          <NavLink onClick={handleLogOut}>
            <FaIcons.FaSignOutAlt /> <span>Logout</span>
          </NavLink>
        </Menu>
      </IconContext.Provider>
    </Wrapper>
  );
}

export default NavBar;
