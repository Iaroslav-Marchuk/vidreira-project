import Order from "../Order/Order";
import css from "./OrderList.module.css";

const OrderList = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Order></Order>
      </li>
    </ul>
  );
};

export default OrderList;
