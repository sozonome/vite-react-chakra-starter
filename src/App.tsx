import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  </ChakraProvider>
);

export default App;
