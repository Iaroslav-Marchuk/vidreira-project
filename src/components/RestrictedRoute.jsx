import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";

const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return isLoggedin ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
