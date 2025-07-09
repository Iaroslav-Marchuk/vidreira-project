import css from "./Button.module.css";

const Button = ({ children, onClick, disabled, type = "button" }) => {
  return (
    <button
      className={css.btn}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
