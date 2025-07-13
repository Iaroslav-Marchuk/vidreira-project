import Order from "../../components/Order/Order.jsx";
import css from "./OrdersPage.module.css";

const OrdersPage = () => {
  return (
    <div className={css.container}>
      <Order />
    </div>
  );
};

export default OrdersPage;
