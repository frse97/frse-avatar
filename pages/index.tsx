import React, { useState, Profiler } from "react";
import Head from "next/head";
import AppContext from "../context/appContext";
import { Avatar } from "../components/avatar-elements/Avatar";
import { SideBar } from "../components/editor-elements/Sidebar";
import { Settings } from "../components/settings";
import { ISettingsElement } from "../components/settings/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

enum FrseAvatarGeneratorThemes {
  LIGHT = 'light',
  DARK = 'dark'
}

const FrseAvatarGenerator = () => {
  const [theme, setTheme] = useState<FrseAvatarGeneratorThemes>(FrseAvatarGeneratorThemes.LIGHT);

  const handleOnChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.persist();
    console.log('he');
    setTheme(theme === FrseAvatarGeneratorThemes.LIGHT ? FrseAvatarGeneratorThemes.DARK : FrseAvatarGeneratorThemes.LIGHT);
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const settings: ISettingsElement[] = [
    {
      label: 'Change Theme',
      type: 'button',
      icon: theme === FrseAvatarGeneratorThemes.LIGHT ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />,
      action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleOnChange(event)
    },
    {
      label: 'Find me on Github',
      type: 'link',
      icon: <FontAwesomeIcon icon={faGithub} />,
      url: "https://github.com/frse97"
    },
    {
      label: 'Contact me',
      type: 'link',
      icon: <FontAwesomeIcon icon={faEnvelopeSquare} />,
      url: "mailto://sebastian.fries@outlook.com"
    }
  ]

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <AppContext>
        <Head>
          <title>FRSE CSS Avatar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="avatar-wrapper">
            <Avatar />
            <Settings settingElements={settings}/>
          </div>
          <SideBar />
        </main>
      </AppContext>
    </Profiler>
  );
};

export default FrseAvatarGenerator;
