import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p>Welcome, {userName}</p>
      <button className={css.btn} type="button">
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
