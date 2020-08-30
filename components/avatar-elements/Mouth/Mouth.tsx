import React from "react";
import styled from "styled-components";
import { IMouth } from "../../../model/avatar.model";

const MouthWrapper: React.FC<IMouth> = props => {
  const { state, children } = props;
  return (
    <Mouth className={'avatar-component'} {...props}>
      {children}
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
  background: ${props => props.state.attributes.BACKGROUND};
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
`;

export default MouthWrapper;
