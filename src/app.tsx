import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';
import { Routings } from '@/lib/router/routings';

export const App = () => (
  <Provider>
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  </Provider>
);
