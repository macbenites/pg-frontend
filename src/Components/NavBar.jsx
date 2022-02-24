import {
  MobileIcon,
  Wrapper,
  Menu,
  NavLink,
  Close,
} from "../Styles/component/NavBar";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { LinkTo } from "../Styles/reusable/LinkTo";

import Logo from "./Logo";
function NavBar({ items, portal }) {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <Wrapper>
      <IconContext.Provider value={{ style: { fontSize: "2rem" } }}>
        <Logo />
        <MobileIcon onClick={showSidebar}>
          <FaIcons.FaBars />
        </MobileIcon>
        <Menu open={isOpen}>
          <Close onClick={showSidebar}>
            <FaIcons.FaTimes />
          </Close>

          {items?.map((item) => (
            <LinkTo key={item.name} to={item.link}>
              <NavLink key={item.name} onClick={showSidebar}>
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </LinkTo>
          ))}
          {portal === "home" && (
            <NavLink onClick={handleLogOut}>
              <FaIcons.FaSignOutAlt />
              <span>Logout</span>
            </NavLink>
          )}
        </Menu>
      </IconContext.Provider>
    </Wrapper>
  );
}

export default NavBar;
