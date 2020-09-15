import React, { useState, Profiler, useRef } from "react";
import Head from "next/head";
import { useSelector, Provider as ReduxProvider } from 'react-redux';
import { Avatar } from "../components/avatar-elements/Avatar";
import { SideBar } from "../components/editor-elements/Sidebar";
import { Settings } from "../components/settings";
import { ISettingsElement } from "../components/settings/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IAvatarGeneratorState } from "../store/store.state";
import store from './../store/index';
import { settingsThemeSelector } from './../store/settings/settings.selector';
import { FrseAvatarGeneratorThemes } from "../model/theme.model";
import { useActions } from "../shared/useActions";
import { useTrackSize } from "../shared/useTrackSize";
import { TrackOptions } from './../shared/useTrackSize';

const onRenderCallback = (
  id?: string,
  phase?: 'mount' | 'update',
  actualDuration?: number,
  baseDuration?: number,
  startTime?: number,
  commitTime?: number,
  interactions?: any
) => {
  console.log('PHASE', phase);
  if (phase === 'mount') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

const FrseAvatarGenerator = () => {
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const handleResize = (size: { width: number, height: number }) => {
    console.log('resize');
    setWrapperWidth(size.width);
  }

  const trackOptions: TrackOptions = {
    debounce: 2,
    width: true,
    handleResize
  }

  const trackSizeAvatarWrapperRef = useTrackSize<HTMLDivElement>(trackOptions)

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <ReduxProvider store={store}>
        <Head>
          <title>FRSE CSS Avatar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="avatar-wrapper" ref={trackSizeAvatarWrapperRef}>
            <div className="avatar-wrapper-width">{wrapperWidth}px</div>
            <Avatar />
            <Settings />
          </div>
        </main>
        <SideBar />
      </ReduxProvider>
    </Profiler>
  );
};

export default FrseAvatarGenerator;
