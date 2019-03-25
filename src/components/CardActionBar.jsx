import React from "react";
import styled from "styled-components";
import IconButton from "./buttons/IconButton";
import { STYLES } from "../globals";
const { PADDING_SM } = STYLES;

const ActionBar = () => {
  const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const IconButtonContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <BarContainer>
      <IconButtonContainer>
        <IconButton type={"edit"}>Manage</IconButton>
        <IconButton type={"analyze"}>Analyze</IconButton>
      </IconButtonContainer>
      <IconButton type={"options"} />
    </BarContainer>
  );
};

export default ActionBar;

/*

    switch (props.type) {
       case 'edit': return <div>edit</div>;
       default: return false;
   }
    */

// @media ${ device.desktop } {
//   width: 100 %;
// }
//   const MockNavItem = styled.div`
//   background: hsla(218, 30%, 90%, 1);
//   height: ${props => props.height || "22px"};
//   width: ${props => props.width || "70px"};
//   border-radius: 5px;
//   margin: 0 20px;
// `;
