import Button from "../../components/Button/Button.jsx";
import FormSection from "../../components/FormSection/FormSection.jsx";

import Order from "../../components/Order/Order.jsx";
import css from "./OrdersPage.module.css";

const OrdersPage = () => {
  return (
    <div className={css.container}>
      <Order />
      <Button type="submit">Novo pedidio</Button>
      <FormSection></FormSection>
    </div>
  );
};

export default OrdersPage;
