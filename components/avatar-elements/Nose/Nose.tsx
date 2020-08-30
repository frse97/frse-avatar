import React from 'react';
import styled from 'styled-components';
import { INose } from '../../../model/avatar.model';

const NoseWrapper: React.FC<INose> = props => {
    const { state } = props;
    return <Nose className={'avatar-component'} {...props} />;
}

const Nose = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 8px;
  height: 14px;
  top: 100px;
  left: 107px;
  border-radius: 100px;
  z-index: 20;
  background: ${props => props.state.attributes.BACKGROUND};
  position: absolute;
  box-sizing: border-box;
`;

export default NoseWrapper;