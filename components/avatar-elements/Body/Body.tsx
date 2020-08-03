import React from 'react';
import styled from 'styled-components';
import { IBody } from '../../../model/avatar.model';

const BodyWrapper: React.FC<IBody> = props => {
    const { background } = props;
    return <Body className={"avatar-component"} {...props} />;
}

const Body = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 100px;
  height: 150px;
  top: 150px;
  left: 60px;
  border-radius: 100px;
  z-index: 10;
  background: ${props => props.background};
  position: absolute;
`;

export default BodyWrapper;