import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "lib/components/layout";
import PrivateRoute from "lib/components/route/PrivateRoute";
import Page404 from "lib/pages/404";

import { privateRoutes, routes } from "routes";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((routeProps, index) => (
          <Route exact {...routeProps} key={index} />
        ))}
        {privateRoutes.map((privateRouteProps, index) => (
          <PrivateRoute {...privateRouteProps} key={`privateRoute-${index}`} />
        ))}
        <Route component={Page404} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
