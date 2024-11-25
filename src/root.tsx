import { HelmetProvider } from 'react-helmet-async';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import { Provider } from '@/components/ui/provider';
import { Layout as AppLayout } from '@/lib/layout';

// fonts
import '@fontsource-variable/plus-jakarta-sans';

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>vite-react-chakra-starter</title>
        <Meta />
        <Links />
      </head>
      <body>
        <HelmetProvider>
          <Provider>
            <AppLayout>{children}</AppLayout>
          </Provider>
        </HelmetProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function Root() {
  return <Outlet />;
}
