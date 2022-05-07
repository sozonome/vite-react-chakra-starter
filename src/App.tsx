import { BrowserRouter as Router } from "react-router-dom";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";

const App = () => (
  <Router>
    <Layout>
      <Routings />
    </Layout>
  </Router>
);

export default App;
