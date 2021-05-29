import { RouteProps } from "react-router-dom";

import Home from "components/home";

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
];

export const privateRoutes: Array<RouteProps> = [];
