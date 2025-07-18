import Button from "../../components/Button/Button.jsx";
import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Perfil do Utilizador</h1>

      <div className={css.wrapper}>
        <div className={css.wrapperLeftSide}>
          <p className={css.avatar}>S</p>
          <div className={css.btns}>
            <Button type="submit">Editar</Button>
            <Button className={css.delete} type="submit">
              Delete
            </Button>
          </div>
        </div>

        <div className={css.wrapperRigthSide}>
          <ul className={css.list}>
            <li className={css.item}>
              <strong>Name: </strong> UtilizadorName
            </li>
            <li className={css.item}>
              <strong>Função: </strong> UtilizadorRole
            </li>
            <li className={css.item}>
              <strong>Palavra-passe:</strong> Utilizador palavrapasse
            </li>
            <li className={css.item}>
              <strong>Registado desde: </strong> 01-01-2025
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
