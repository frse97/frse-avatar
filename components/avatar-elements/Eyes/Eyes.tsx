import React from 'react';
import styled from 'styled-components';
import { IEyes } from '../../../model/avatar.model';

const EyesWrapper: React.FC<IEyes> = props => {
    const { background } = props;

    return <Eyes className={'avatar-component'} {...props} />;
}

const Eyes = styled.div.attrs(internalProps => {
  className: internalProps.className
})`
  width: 10px;
  height: 10px;
  top: 100px;
  left: 80px;
  border-radius: 10px;
  z-index: 30;
  background: ${props => props.background};
  position: absolute;
  box-sizing: border-box;

  &:before{
      width: 10px;
      height: 10px;
      left: 50px;
      border-radius: 10px;
      background: ${props => props.background};
      position: absolute;
      content: '';
  }
`;

// .group__eye{
//     z-index: 30;
//     top: 100px;
//     left: 80px;
//     width: 10px;
//     height: 10px;
//     /* #18d3af  */
//     background: #424B54;
//     border-radius: 10px;
// }
// .group__eye:before{
//     position: absolute;
//     content: '';
//     left: 50px;
//     width: 10px;
//     height: 10px;
//     background: #424B54;
//     border-radius: 10px;
// }

export default EyesWrapper;