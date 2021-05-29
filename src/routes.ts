import { RouteProps } from "react-router-dom";

import Home from "components/home";
import Page404 from "components/404";

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    component: Page404,
  },
];

export const privateRoutes: Array<RouteProps> = [];
