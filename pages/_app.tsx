import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => axios(resource, init).then(res => res.data)
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
