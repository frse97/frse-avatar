import React from 'react';
import styled from 'styled-components';
import { INeck } from '../../../model/avatar.model';

const NeckWrapper: React.FC<INeck> = props => {
    const { background } = props;
    return <Neck className={'avatar-component'} {...props} />;
}

const Neck = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 30px;
  height: 30px;
  top: 130px;
  left: 97px;
  border-radius: 30px;
  z-index: 13;
  background: ${props => props.background};
  position: absolute;
  box-sizing: border-box;
`;

export default NeckWrapper;