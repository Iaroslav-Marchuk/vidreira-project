import css from "./Statistic.module.css";

const Statistic = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        À data de 21/07/2025, a fábrica Vidreira Algarve tem em produção um
        total de 25 encomendas por concluir. O número total de vidros pendentes
        é de 38 unidades. A encomenda pendente mais antiga é a EP-1234 (Nome do
        cliente), com início de 04/04/2025, na linha de produção 1.
      </p>
      <div className={css.innerWrapper}>
        <p>
          Para consultar a informação de cada linha de produção, selecione uma
          opção.
        </p>
        <select className={css.select} name="">
          <option value="L1">L1</option>
          <option value="L2">L2</option>
          <option value="L3">L3</option>
        </select>
      </div>

      <h1 className={css.title}>Estatistica da Linha 1</h1>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.th1}>#</th>
            <th className={css.th2}>Encomenda</th>
            <th className={css.th3}>Cliente</th>
            <th className={css.th4}>Data</th>
            <th className={css.th5}>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>EP-1234</td>
            <td>Cliente 1</td>
            <td>01/01/2025</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>EP-2345</td>
            <td>Cliente 2</td>
            <td>02/02/2025</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>EP-3456</td>
            <td>Cliente 3</td>
            <td>03/03/2025</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>EP-4567</td>
            <td>Cliente 4</td>
            <td>04/04/2025</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>EP-5678</td>
            <td>Cliente 5</td>
            <td>05/05/2025</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistic;
