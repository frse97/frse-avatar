import React from 'react';
import styled from 'styled-components';
import { IBlush } from '../../../model/avatar.model';

const BlushWrapper: React.FC<IBlush> = props => {
    const { background } = props;
    return <Blush className={"avatar-component"} {...props} />;
}

const Blush = styled.div.attrs(internalProps => {
    className: internalProps.className
})`
  width: 10px;
  height: 7px;
  top: 116px;
  left: 77px;
  border-radius: 10px;
  z-index: 90;
  background: ${props => props.background};
  position: absolute;
  opacity: 0.4;

  &:before{
    width: 10px;
    height: 7px;
    left: 58px;
    border-radius: 10px;
    background: ${props => props.background};
    position: absolute;
    content: '';
  }
`;

export default BlushWrapper;