import '../styles/global.css'
import { Provider } from 'next-auth/client'

export default function App ({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}
