import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import Navigation from "../Navigation/Navigation";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Header.module.css";

import logo from "../../assets/logo.png";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <NavLink to="/">
        <img src={logo} alt="logo" height="85px" width="120px" />
      </NavLink>

      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default Header;
