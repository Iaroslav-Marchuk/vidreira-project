import css from "./Order.module.css";

const Order = ({ order, index }) => {
  return (
    <div className={css.orderList}>
      <div className={css.ordertableWrapper}>
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
            {order.units.map((unit) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{order.EP}</td>
                <td>{order.cliente}</td>
                <td>{`${unit.categoria} ${unit.type} ${
                  unit.temper ? " (temperado)" : ""
                }`}</td>
                <td>{`${unit.sizeX}x${unit.sizeY}x${unit.sizeZ}`}</td>
                <td>{unit.quantity}</td>
                <td>{unit.reason}</td>

                <td>{order.local.zona}</td>
                <td>{order.local.operator}</td>
                <td>DATA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
