// import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import "react-tabs/style/react-tabs.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../../redux/ordersOps";

import OrderList from "../OrderList/OrderList";

import {
  // selectOrders,
  selectLoading,
  selectError,
} from "../../redux/ordersSlice";

import ModalLib from "react-modal";

import Section from "../Section/Section";
import Container from "../Container/Container";
import FormSection from "../FormSection/FormSection";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
import Button from "../Button/Button";

ModalLib.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const dispatch = useDispatch();
  // const orders = useSelector(selectOrders);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Toaster />
        <div>
          <Button type="button" onClick={openModal}>
            Fazer pedido
          </Button>

          <ModalOverlay isOpen={modalIsOpen} onClose={closeModal}>
            <FormSection></FormSection>
          </ModalOverlay>
        </div>
        <div>
          {loading && <Loader />}
          {error && <ErrorMessage />}
          <OrderList />
        </div>
      </Container>
    </Section>
  );
}

export default App;
