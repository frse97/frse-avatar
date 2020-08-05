import React from 'react';
import styled from 'styled-components';
import { IFace } from '../../../model/avatar.model';

const FaceWrapper: React.FC<IFace> = props => {
    const { background } = props;
    return <Face className={'avatar-component'} {...props} />;
}

const Face = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 80px;
  height: 100px;
  top: 50px;
  left: 70px;
  border-radius: 100px;
  z-index: 20;
  background: ${props => props.background};
  position: absolute;
  box-sizing: border-box;
`;

export default FaceWrapper;