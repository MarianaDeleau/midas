import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers"

const publicRoutes = ["/", "/signup"];


const WithAuth = (Component) => {
  const Authenticated = () => {

    const history = useHistory();
    const location = useLocation()

    const { logged  } = useUsers();


    if (logged && publicRoutes.includes(location.pathname)) history.push("/home");

    if (logged === false && !publicRoutes.includes(location.pathname))
    history.push("/");

    return <Component/>;
  };

  return Authenticated;
};

export { WithAuth };
