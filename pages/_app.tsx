import { AppProps } from 'next/app';
import '../components/FrseAvatar/FrseAvatar.css';
import '../components/editor-elements/ColorPicker/ColorPicker.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp