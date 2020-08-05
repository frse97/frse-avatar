import React, { createContext, useState } from 'react';

export const AppContext = createContext(undefined);

const AppProvider = ({children}) => {
  const [currentSkinColor, setCurrentSkinColor] = useState("#f0beaf");
  const [currentBodyColor, setCurrentBodyColor] = useState("#133337");
  const [currentMouthColor, setCurrentMouthColor] = useState("#424B54");
  const [currentTongueColor, setCurrentTongueColor] = useState("#f254a9");
  const [currentEyesColor, setCurrentEyesColor] = useState("#3c87b9");
  const [currentEyeBrownColor, setCurrentEyeBrownColor] = useState("#ffa500");
  const [currentNoseColor, setCurrentNoseColor] = useState("#DB9B99");
  const [currentBlushColor, setCurrentBlushColor] = useState("#f254a9");

    return <AppContext.Provider value={{currentBodyColor,
                                        currentSkinColor,
                                        currentNoseColor,
                                        currentMouthColor,
                                        currentTongueColor,
                                        currentEyesColor,
                                        currentEyeBrownColor,
                                        currentBlushColor,
                                        setCurrentBodyColor,
                                        setCurrentSkinColor,
                                        setCurrentNoseColor,
                                        setCurrentMouthColor,
                                        setCurrentTongueColor,
                                        setCurrentEyesColor,
                                        setCurrentEyeBrownColor,
                                        setCurrentBlushColor}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;