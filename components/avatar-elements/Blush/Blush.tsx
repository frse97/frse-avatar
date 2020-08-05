import React from 'react';
import styled from 'styled-components';
import { IBlush } from '../../../model/avatar.model';

const BlushWrapper: React.FC<IBlush> = props => {
  const { background } = props;
  return <><BlushLeft className={"avatar-component"} {...props} />
  <BlushRight className={"avatar-component"} {...props} /></>;
}

const BlushLeft = styled.div.attrs(internalProps => {
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
box-sizing: border-box;
opacity: 0.4;
`

const BlushRight = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
    width: 10px;
    height: 7px;
    top: 116px;
    left: 135px;
    border-radius: 10px;
    z-index: 90;
    background: ${props => props.background};
    position: absolute;
    box-sizing: border-box;
    opacity: 0.4;
`;

export default BlushWrapper;