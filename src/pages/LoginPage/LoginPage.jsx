import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
