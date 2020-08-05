import { AppProps } from 'next/app';
import '../components/FrseAvatar/FrseAvatar.css';
//Import Editor Components Styles
import '../components/editor-elements/ColorPicker/ColorPicker.scss';
import '../components/editor-elements/Tabs/Tabs.scss';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp