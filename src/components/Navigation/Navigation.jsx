import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/orders"
          >
            Pedidos
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/profile"
          >
            Profile
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
