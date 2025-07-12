import { useSelector } from "react-redux";
import Statistic from "../../components/Statistic/Statistic.jsx";
import css from "./HomePage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? (
    <div className={css.container}>
      <h1 className={css.title}>Bem-vindo à nossa aplicação!</h1>
      <p className={css.text}>
        Esta é a sua ferramenta ideal para gerir pedidos de produção de forma
        rápida, simples e organizada.
      </p>
      <p className={css.text}>Com a nossa aplicação, você pode:</p>
      <ul className={css.list}>
        <li className={css.item}>🧾 Criar e gerir pedidos de produção</li>
        <li className={css.item}>
          👥 Acompanhar o responsável e o estado de cada pedido
        </li>
        <li className={css.item}>
          📊 Ver estatísticas em tempo real por linha de produção
        </li>
        <li className={css.item}>
          🔐 Manter os seus dados seguros e acessíveis apenas a utilizadores
          autorizados
        </li>
      </ul>

      <p className={css.text}>
        Para começar, por favor
        <Link to="/register" className={css.linkBtn}>
          {" "}
          Registe-se{" "}
        </Link>
        ou
        <Link to="/login" className={css.linkBtn}>
          {" "}
          Inicie sessão
        </Link>
        .
      </p>
      <p className={css.text}>
        Após autenticação, terá acesso total a todas as funcionalidades da
        aplicação.
      </p>
    </div>
  ) : (
    <Statistic />
  );
};

export default HomePage;
