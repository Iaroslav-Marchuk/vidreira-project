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
              <th>Q-de</th>
              <th>Motivo</th>
              <th>Local</th>
              <th>Operador</th>
              <th>Data</th>
            </tr>
          </thead>
          {
            <tbody>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>Rodrigues e Almeida</td>
                <td>Sec. SKN184 II 6mm</td>
                <td>1287 x 2568</td>
                <td>2</td>
                <td>Falta</td>

                <td>L1</td>
                <td>Operador1</td>
                <td>15-07-2005 14:36</td>
              </tr>
              <tr>
                <td>2</td>
                <td>6541</td>
                <td>Bancada Superior</td>
                <td>Lam.C. 44.2</td>
                <td>801 x 1518</td>
                <td>4</td>
                <td>c/ canto partido</td>

                <td>L3</td>
                <td>Operador2</td>
                <td>15-07-2005 10:06</td>
              </tr>
            </tbody>
          }
          {/* <tbody>
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
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Order;
