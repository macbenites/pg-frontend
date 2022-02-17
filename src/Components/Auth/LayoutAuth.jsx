import { Outlet } from "react-router-dom";
import { NavAuth } from "../../Utils/NavBar";
import NavBar from "../NavBar";

export const LayoutAuth = () => {
  return (
    <div>
      <NavBar items={NavAuth} />
      <Outlet />
    </div>
  );
};
