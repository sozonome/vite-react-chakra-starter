import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Plus Jakarta Sans Variable, sans-serif' },
        body: { value: 'Plus Jakarta Sans Variable, sans-serif' },
      },
    },
  },
});
