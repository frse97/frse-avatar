import { AppProps } from 'next/app';
import '../components/FrseAvatar/FrseAvatar.css';
import '../components/editor-elements/ColorPicker/ColorPicker.scss';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp