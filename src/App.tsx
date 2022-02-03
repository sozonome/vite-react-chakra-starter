import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "lib/components/layout";
import PrivateRoute from "lib/components/route/PrivateRoute";
import Page404 from "lib/pages/404";
import { privateRoutes, routes } from "routes";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((routeProps) => (
          <Route exact {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map((privateRouteProps) => (
          <PrivateRoute
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route component={Page404} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
