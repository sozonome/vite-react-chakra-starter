import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/root.tsx'],
  project: ['src/**/*.{ts,tsx,js,jsx,css,scss}'],
  ignoreBinaries: ['changelogithub'],
  ignoreDependencies: ['@react-router/node', 'isbot']
};

export default config;
