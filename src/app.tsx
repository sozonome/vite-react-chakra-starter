import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';
import { Routings } from '@/lib/router/routings';
import { HelmetProvider } from 'react-helmet-async';

export const App = () => (
  <HelmetProvider>
    <Provider>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </Provider>
  </HelmetProvider>
);
