import { AppProps } from 'next/app';
import '../components/Avatar/Avatar.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp