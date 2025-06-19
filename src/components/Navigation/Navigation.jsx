import { NavLink } from "react-router-dom";

// import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pedidos">Pedidos</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default Navigation;
