import React from 'react';
import styled from 'styled-components';
import { IEyeBrown } from '../../../model/avatar.model';

const EyeBrownWrapper: React.FC<IEyeBrown> = props => {
    const { background } = props;
    return <EyeBrown className={"avatar-component"} {...props} />;
}

const EyeBrown = styled.div.attrs(internalProps => {
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

  &:before{
    width: 20px;
    height: 2px;
    left: 50px;
    border-radius: 3px;
    background: ${props => props.background};
    position: absolute;
    content: '';
  }
`;

export default EyeBrownWrapper;