import { extendTheme } from '@chakra-ui/react';

import { config } from './config';

export const theme = extendTheme({
  fonts: {
    heading: 'Plus Jakarta Sans Variable, sans-serif',
    body: 'Plus Jakarta Sans Variable, sans-serif',
  },
  components: {
    // Button: {
    // }
  },
  config,
});
