import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../shared/i18n';
import { AppProps } from 'next/app';
import '../components/FrseAvatar/FrseAvatar.css';

// Import Editor Components Styles
import '../components/editor-elements/Tabs/Tabs.scss';
import '../components/editor-elements/ColorPicker/ColorPicker.scss';
import '../components/editor-elements/NumberInput/NumberInput.scss';

//Settings 
import '../components/settings/Settings.scss';

// General Styles
import '../styles/main.scss';

// Theming
import '../styles/theming.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

export default appWithTranslation(MyApp);