import React from "react";
import Face from "../Face/Face";
import Neck from "../Neck/Neck";
import { Body } from "../Body";
import { IAvatarProps } from "../../../model/avatar.model";
import { Mouth } from "../Mouth";

const Avatar: React.FC<IAvatarProps> = props => {
  const { skinColor, bodyColor, mouthColor, tongueColor } = props;

  return (
    <div className={`profile`}>
      <Face background={skinColor} />
      <Mouth background={mouthColor} tongueColor={tongueColor} />
      <Neck background={skinColor} />
      <Body background={bodyColor} />
    </div>
  );
};

export default Avatar;
