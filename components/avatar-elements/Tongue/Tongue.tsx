import React from "react";
import styled from "styled-components";
import { IMouth } from "../../../model/avatar.model";

const TongueWrapper: React.FC<IMouth> = props => {
  const { state } = props;
  return (
    <Tongue className={'avatar-component'} {...props} />
  );
};

const Tongue = styled.div.attrs(internalProps => {
    className: internalProps.className
  })`
    width: 30px;
    height: 20px;
    top: 5px;
    left: 8px;
    border-radius: 30px;
    background: ${props => props.state.attributes.BACKGROUND};
    position: absolute;
  `;

export default TongueWrapper;