import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "components/layout";
import PrivateRoute from "components/route/PrivateRoute";
import Page404 from "components/404";

import { privateRoutes, routes } from "routes";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((routeProps, index) => (
            <Route exact {...routeProps} key={index} />
          ))}
          {privateRoutes.map((privateRouteProps, index) => (
            <PrivateRoute
              {...privateRouteProps}
              key={`privateRoute-${index}`}
            />
          ))}
          <Route component={Page404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
