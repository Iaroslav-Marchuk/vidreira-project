import { Toaster } from "react-hot-toast";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

import ModalLib from "react-modal";

import Section from "../Section/Section";
import Container from "../Container/Container";
import FormSection from "../FormSection/FormSection";
import GlassCapa from "../GlassCapa/GlassCapa";
import GlassLaminado from "../GlassLaminado/GlassLaminado";
import GlassSimple from "../GlassSimple/GlassSimple";
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
          <Tabs>
            <TabList>
              <Tab>Vidro Simples</Tab>
              <Tab>Vidro Capa</Tab>
              <Tab>Vidro Laminado</Tab>
            </TabList>

            <TabPanel>
              <GlassSimple />
            </TabPanel>
            <TabPanel>
              <GlassCapa />
            </TabPanel>
            <TabPanel>
              <GlassLaminado />
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </Section>
  );
}

export default App;
