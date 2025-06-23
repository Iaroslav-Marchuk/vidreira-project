import { useSelector } from "react-redux";
import { selectOrders } from "../../redux/orders/slice";

import Order from "../Order/Order";
import css from "./OrderList.module.css";

const OrderList = () => {
  const orders = useSelector(selectOrders);
  return (
    <ul className={css.list}>
      {orders.map((order, index) => (
        <li className={css.item} key={order.id}>
          <Order order={order} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
