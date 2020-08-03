import React from "react";
import styled from "styled-components";
import { IMouth } from "../../../model/avatar.model";

const MouthWrapper: React.FC<IMouth> = props => {
  const { background, tongueColor } = props;
  return (
    <Mouth className={'avatar-component'} {...props}>
      <Tongue className={'avatar-component'} {...props} />
    </Mouth>
  );
};

const Mouth = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 30px;
  height: 15px;
  top: 120px;
  left: 97px;
  border-radius: 0 0 100px 100px;
  z-index: 20;
  background: ${props => props.background};
  overflow: hidden;
  position: absolute;
`;

const Tongue = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 30px;
  height: 20px;
  top: 5px;
  left: 8px;
  border-radius: 30px;
  background: ${props => props.tongueColor};
  position: absolute;
`;

export default MouthWrapper;
