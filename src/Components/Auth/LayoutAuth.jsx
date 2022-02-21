import { Outlet } from "react-router-dom";

import Logo from "../Logo";
export const LayoutAuth = () => {
  return (
    <div>
      <Logo />
      <Outlet />
    </div>
  );
};
