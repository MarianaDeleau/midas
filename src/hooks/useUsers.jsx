import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Users } from "../api/apiUsers";
import { message } from "antd";

const useUsers = () => {
  const history = useHistory();
  const [logged, setLogged] = useState(
    JSON.parse(localStorage.getItem("logged")) || false
  );

  const login = (email, password) => {
    const exist = Users.find((u) => {
      return u.user === email && u.pass === password;
    });

    if (exist) {
      localStorage.setItem("logged", JSON.stringify(true));
      setLogged(true);
      history.push("/home");
    } else {
      message.error("Usuario o contraseña incorrecta!", 5);
      setLogged(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("logged");
    history.push("/");
    setLogged(false);
  };

  return { login, logged, setLogged, logout };
};

export { useUsers };
