import React from 'react';
import styled from 'styled-components';
import { IEyes } from '../../../model/avatar.model';

const EyesWrapper: React.FC<IEyes> = props => {
  const { state } = props;

  return <>
  <LeftEye className={'avatar-component'} {...props} />
  <RightEye className={'avatar-component'} {...props} /></>;
}

const LeftEye = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 10px;
  height: 10px;
  top: 100px;
  left: 80px;
  border-radius: 10px;
  z-index: 30;
  background: ${props => props.state.attributes.BACKGROUND};
  position: absolute;
  box-sizing: border-box;
})
`

const RightEye = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
    width: 10px;
    height: 10px;
    top: 100px;
    left: 130px;
    border-radius: 10px;
    z-index: 30;
    background: ${props => props.state.attributes.BACKGROUND};
    position: absolute;
    box-sizing: border-box;
`;

export default EyesWrapper;