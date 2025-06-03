import css from "./Order.module.css";

const Order = () => {
  return (
    <div className={css.orderList}>
      <div classsName={css.ordertableWrapper}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>EP</th>
              <th>Cliente</th>
              <th>Vidro</th>
              <th>Medida</th>
              <th>Quantidade</th>
              <th>Motivo</th>
              <th>Local</th>
              <th>Operador</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <th>#</th>
            <th>EP</th>
            <th>Cliente</th>
            <th>Vidro</th>
            <th>Medida</th>
            <th>Quantidade</th>
            <th>Motivo</th>
            <th>Local</th>
            <th>Operador</th>
            <th>Data</th>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
