import Header from "../Header/Header";
import css from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
};

export default Container;
