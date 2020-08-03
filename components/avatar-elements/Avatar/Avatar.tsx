import React from "react";
import Face from "../Face/Face";
import Neck from "../Neck/Neck";
import { Body } from "../Body";
import { IAvatarProps } from "../../../model/avatar.model";
import { Mouth } from "../Mouth";
import { Eyes } from "../Eyes";
import { Blush } from "../Blush";
import { EyeBrown } from "../Eyebrown";
import { Nose } from "../Nose";

const Avatar: React.FC<IAvatarProps> = props => {
  const { skinColor, bodyColor, mouthColor, tongueColor, eyesColor, eyebrownColor, noseColor, blushColor } = props;

  return (
    <div className={`profile`}>
      <Face background={skinColor} />
      <EyeBrown background={eyebrownColor} />
      <Eyes background={eyesColor} />
      <Nose background={noseColor} />
      <Blush background={blushColor} />
      <Mouth background={mouthColor} tongueColor={tongueColor} />
      <Neck background={skinColor} />
      <Body background={bodyColor} />
    </div>
  );
};

export default Avatar;
