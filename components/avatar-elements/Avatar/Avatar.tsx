import React, { useContext, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
import { IAvatar } from "../../../model/avatar.model";
import { TrackSize } from './../../../model/generic.model';

const AvatarWrapper: React.FC<IAvatar> = props => {

  const { containerSize } = props;
  const avatarMinimalSize: {width: number, height: number} = {
    width: 200,
    height: 200
  }
  const avatarMargin: number = 20 + 20;
  const minHeight: number = avatarMinimalSize.height + avatarMargin;
  const maxHeight: number = 620;
  const minWidth: number = minHeight + 120;
  const maxWidth: number = 820;
  
  const scaleAvatar = (containerSize: TrackSize): number => { 

    // The scale proportion is always the shortest dimension
    let scalingMode: 'width' | 'height' = undefined;
    if(containerSize.width > containerSize.height){
      scalingMode = 'height';
    } else {
      scalingMode = 'width';
    }

    if(scalingMode === 'height'){
      if(containerSize.height > maxHeight){
        return scaling;
      } else if (containerSize.height >= minHeight && containerSize.height <= maxHeight){
        return (containerSize.height * 1.0) / minHeight
      } else if(containerSize.height <= minHeight){
        return 1.0;
      }
    } else if(scalingMode === 'width'){
      if(containerSize.width > maxWidth){
        return scaling;
      } else if(containerSize.width >= minWidth && containerSize.width <= maxWidth){
        return (containerSize.width * 1.0) / minWidth
      } else if(containerSize.width <= minWidth) {
        return 1.0;
      }
    }
  }

  const [scaling, setScaling] = useState<number>(scaleAvatar(containerSize));

  const blushState = useSelector(avatarPartSelector(AvatarParts.BLUSH));
  const bodyState = useSelector(avatarPartSelector(AvatarParts.BODY));
  const eyebrownState = useSelector(avatarPartSelector(AvatarParts.EYEBROWN));
  const eyeState = useSelector(avatarPartSelector(AvatarParts.EYES));
  const faceState = useSelector(avatarPartSelector(AvatarParts.FACE));
  const mouthState = useSelector(avatarPartSelector(AvatarParts.MOUTH));
  const tongueState = useSelector(avatarPartSelector(AvatarParts.TONGUE));
  const neckState = useSelector(avatarPartSelector(AvatarParts.FACE));
  const noseState = useSelector(avatarPartSelector(AvatarParts.NOSE));

  useEffect(() => {
    const currentScale = scaleAvatar(containerSize);
    setScaling(currentScale);
  }, [containerSize.width, containerSize.height])

  const Avatar = styled.div`
    position: absolute;
    transform: scale(${scaling});
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border-radius: 200px;
    overflow: hidden;
    background: #E8E9EB;
  `

  return <Avatar className={"avatar"} {...scaling}>
          <Face state={faceState} />
          <EyeBrown state={eyebrownState} />
          <Eyes state={eyeState} />
          <Nose state={noseState} />
          <Blush state={blushState} />
          <Mouth state={mouthState}>
            <Tongue state={tongueState}></Tongue>
          </Mouth>
          <Neck state={neckState} />
          <Body state={bodyState} />
        </Avatar>
}

export default AvatarWrapper;
