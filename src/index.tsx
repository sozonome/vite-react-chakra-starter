import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';

// fonts
import '@fontsource/plus-jakarta-sans/latin.css';

import { theme } from '~/lib/styles/theme';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <App />
  </React.StrictMode>
);
