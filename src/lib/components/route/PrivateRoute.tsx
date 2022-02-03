import type { RouteProps } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";

type PrivateRouteProps = RouteProps & {
  isAllowed?: boolean;
};

const PrivateRoute = ({
  isAllowed,
  component: RouteComponent,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={() => (isAllowed ? RouteComponent : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
