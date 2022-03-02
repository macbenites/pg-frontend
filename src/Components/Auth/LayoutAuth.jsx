import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authState } from "../../Redux/Actions/index";
import { Loader } from "../../Styles/component/Home";

import Logo from "../Logo";
export const LayoutAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userState } = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    dispatch(authState());
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [dispatch]); // con la data de user podemos maquillar el home con la foto y data del usuario

  if (userState?.name) navigate("/home/games");

  return (
    <div>
      {loader ? (
        <Loader>Loading...</Loader>
      ) : (
        <div>
          <Logo />
          <Outlet />
        </div>
      )}
    </div>
  );
};
