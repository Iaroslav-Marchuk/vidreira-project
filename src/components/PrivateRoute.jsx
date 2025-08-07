import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";

const PrivateRoute = ({ component }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return isLoggedin ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
