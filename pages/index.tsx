import React, { useState, Profiler, useRef } from "react";
import PropTypes from 'prop-types';
import Head from "next/head";
import { Provider as ReduxProvider } from 'react-redux';
import { Avatar } from "../components/avatar-elements/Avatar";
import { SideBar } from "../components/editor-elements/Sidebar";
import { Settings } from "../components/settings";
import store from '../store/index';
import { useTrackSize } from "../shared/useTrackSize";
import { TrackOptions } from '../shared/useTrackSize';
import { TrackSize } from "../model/generic.model";
import { withTranslation } from '../shared/i18n';

const onRenderCallback = (
  id?: string,
  phase?: 'mount' | 'update',
  actualDuration?: number,
  baseDuration?: number,
  startTime?: number,
  commitTime?: number,
  interactions?: any
) => {
  if (phase === 'mount') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

const FrseAvatarGenerator = ({ t }) => {
  const [wrapperSize, setWrapperSize] = useState<TrackSize>({ width: 0, height: 0 });

  const handleResize = (size: { width: number, height: number }) => {
    setWrapperSize({ width: size.width, height: size.height });
  }

  const trackOptions: TrackOptions = {
    debounce: 2,
    width: true,
    height: true,
    handleResize
  }

  const trackSizeAvatarWrapperRef = useTrackSize<HTMLDivElement>(trackOptions)

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <ReduxProvider store={store}>
        <Head>
          <title>{t('meta.title')}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="avatar-wrapper" ref={trackSizeAvatarWrapperRef}>

            <div className="avatar-wrapper-width">{t('dictionary.width')} {wrapperSize.width}{t('dictionary.px')}, {t('dictionary.height')} {wrapperSize.height}{t('dictionary.px')}</div>
            <Avatar containerSize={wrapperSize} />
          </div>
          <Settings />
        </main>
        <SideBar />
      </ReduxProvider>
    </Profiler>
  );
};

FrseAvatarGenerator.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

FrseAvatarGenerator.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(FrseAvatarGenerator);
