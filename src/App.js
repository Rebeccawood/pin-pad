import React from "react";
import GlobalStyles from "./stylesheets/globalStyles";
import PinPad from "./components/PinPad/index";
import Text from "./components/Text/index";
import Layout from "./components/Atoms/layout";

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <PinPad />
      <Text />
    </Layout>
  );
}

export default App;
