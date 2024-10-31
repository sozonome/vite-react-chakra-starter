import * as React from 'react';
import ReactDOM from 'react-dom/client';

// fonts
import '@fontsource-variable/plus-jakarta-sans';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
