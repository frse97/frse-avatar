import React from 'react';
import styled from 'styled-components';
import { IBody } from '../../../model/avatar.model';

const BodyWrapper: React.FC<IBody> = props => {
    const { state } = props;
    console.log(props);
    
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
  background: ${props => props.state.attributes.BACKGROUND};
  position: absolute;
  border: 1px solid #000;
  box-sizing: border-box;
`;

export default BodyWrapper;