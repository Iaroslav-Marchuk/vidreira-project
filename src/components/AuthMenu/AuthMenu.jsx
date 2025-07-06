import { NavLink } from "react-router-dom";

import css from "./AuthMenu.module.css";
import clsx from "clsx";

const AuthMenu = () => {
  return (
    <nav className={css.wrapper}>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Registar
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Entrar
      </NavLink>
    </nav>
  );
};

export default AuthMenu;
