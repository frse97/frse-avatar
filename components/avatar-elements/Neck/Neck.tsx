import React from 'react';
import styled from 'styled-components';
import { INeck } from '../../../model/avatar.model';

const NeckWrapper: React.FC<INeck> = props => {
    const { background } = props;
    return <Neck {...props} />;
}

const Neck = styled.div`
  width: 30px;
  height: 30px;
  top: 130px;
  left: 97px;
  border-radius: 30px;
  z-index: 13;
  background: ${props => props.background};
  position: absolute;
`;

export default NeckWrapper;