import { RouteProps } from "react-router-dom";

import Home from "lib/pages/home";

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
];

export const privateRoutes: Array<RouteProps> = [];
