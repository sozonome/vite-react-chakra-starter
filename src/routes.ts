import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('lib/pages/home/index.tsx'),
  route('*', 'lib/pages/404.tsx'),
] satisfies RouteConfig;
