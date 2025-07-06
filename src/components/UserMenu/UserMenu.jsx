import Button from "../Button/Button.jsx";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p>Olá, UserName</p>
      <Button>Sair</Button>
    </div>
  );
};

export default UserMenu;
