import { Redirect, Route, RouteProps } from "react-router-dom";

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
      render={(_) => (isAllowed ? RouteComponent : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
