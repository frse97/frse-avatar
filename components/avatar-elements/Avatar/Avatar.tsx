import React, { useContext } from "react";
import Face from "../Face/Face";
import Neck from "../Neck/Neck";
import { Body } from "../Body";
import { IAvatarProps } from "../../../model/avatar.model";
import { Mouth } from "../Mouth";
import { Eyes } from "../Eyes";
import { Blush } from "../Blush";
import { EyeBrown } from "../Eyebrown";
import { Nose } from "../Nose";
import { AppContext } from "../../../context/appContext";

const Avatar: React.FC<IAvatarProps> = props => {
  const { currentBodyColor,
    currentSkinColor,
    currentNoseColor,
    currentMouthColor,
    currentTongueColor,
    currentEyesColor,
    currentEyeBrownColor,
    currentBlushColor } = useContext(AppContext);

  return (
    <div className={`avatar`}>
      <Face background={currentSkinColor} />
      <EyeBrown background={currentEyeBrownColor} />
      <Eyes background={currentEyesColor} />
      <Nose background={currentNoseColor} />
      <Blush background={currentBlushColor} />
      <Mouth background={currentMouthColor} tongueColor={currentTongueColor} />
      <Neck background={currentSkinColor} />
      <Body background={currentBodyColor} />
    </div>
  );
};

export default Avatar;
