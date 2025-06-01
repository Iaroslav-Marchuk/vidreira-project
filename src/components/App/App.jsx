import { Toaster } from "react-hot-toast";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Section from "../Section/Section";
import Container from "../Container/Container";
import FormSection from "../FormSection/FormSection";
import GlassCapa from "../GlassCapa/GlassCapa";
import GlassLaminado from "../GlassLaminado/GlassLaminado";
import GlassSimple from "../GlassSimple/GlassSimple";

function App() {
  return (
    <Section>
      <Container>
        <FormSection></FormSection>
        <Toaster />
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
      </Container>
    </Section>
  );
}

export default App;
