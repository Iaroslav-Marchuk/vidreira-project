import css from "./Button.module.css";

const Button = ({
  children,
  onClick,
  disabled,
  type = "button",
  className = "",
}) => {
  return (
    <button
      className={`${css.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
