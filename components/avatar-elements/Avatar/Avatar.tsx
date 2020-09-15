import React, { useContext } from "react";
import { useSelector } from 'react-redux';
import Face from "../Face/Face";
import Neck from "../Neck/Neck";
import { Body } from "../Body";
import { Mouth } from "../Mouth";
import { Eyes } from "../Eyes";
import { Blush } from "../Blush";
import { EyeBrown } from "../Eyebrown";
import { Nose } from "../Nose";
import { avatarPartSelector } from './../../../store/avatar/avatar.selector';
import { AvatarParts } from "../../../store/avatar/avatar.state";
import { Tongue } from "../Tongue";

const Avatar: React.FC = props => {
  const blushState = useSelector(avatarPartSelector(AvatarParts.BLUSH));
  const bodyState = useSelector(avatarPartSelector(AvatarParts.BODY));
  const eyebrownState = useSelector(avatarPartSelector(AvatarParts.EYEBROWN));
  const eyeState = useSelector(avatarPartSelector(AvatarParts.EYES));
  const faceState = useSelector(avatarPartSelector(AvatarParts.FACE));
  const mouthState = useSelector(avatarPartSelector(AvatarParts.MOUTH));
  const tongueState = useSelector(avatarPartSelector(AvatarParts.TONGUE));
  const neckState = useSelector(avatarPartSelector(AvatarParts.FACE));
  const noseState = useSelector(avatarPartSelector(AvatarParts.NOSE));

  
  return (
    <div className={`avatar`}>
      <Face state={faceState} />
      <EyeBrown state={eyebrownState}  />
      <Eyes state={eyeState}/>
      <Nose state={noseState}/>
      <Blush state={blushState} />
      <Mouth state={mouthState}>
        <Tongue state={tongueState}></Tongue>
      </Mouth>
      <Neck state={neckState} />
      <Body state={bodyState} />
    </div>
  );
};

export default Avatar;
