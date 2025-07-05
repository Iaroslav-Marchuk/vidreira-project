import Header from "../Header/Header";
import css from "./Layaut.module.css";

const Layaut = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layaut;
