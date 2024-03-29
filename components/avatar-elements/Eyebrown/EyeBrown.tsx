import React from 'react';
import styled from 'styled-components';
import { IEyeBrown } from '../../../model/avatar.model';

const EyeBrownWrapper: React.FC<IEyeBrown> = props => {
  const { background } = props;
  return <>
  <EyeBrownLeft className={"avatar-component"} {...props} />
  <EyeBrownRight className={"avatar-component"} {...props} /></>;
}

const EyeBrownLeft = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 20px;
  height: 2px;
  top: 95px;
  left: 74px;
  border-radius: 3px;
  z-index: 90;
  background: ${props => props.background};
  position: absolute;
  box-sizing: border-box;
`

const EyeBrownRight = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
    width: 20px;
    height: 2px;
    top: 95px;
    left: 124px;
    border-radius: 3px;
    z-index: 90;
    background: ${props => props.background};
    position: absolute;
   box-sizing: border-box;
`;

export default EyeBrownWrapper;