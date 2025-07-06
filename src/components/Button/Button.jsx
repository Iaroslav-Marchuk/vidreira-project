import css from "./Button.module.css";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button className={css.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
