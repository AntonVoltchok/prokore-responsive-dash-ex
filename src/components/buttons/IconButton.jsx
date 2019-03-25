import React from "react";
import styled from "styled-components";
import optionIcon from "../../icons/options_icon.svg";
import chartIcon from "../../icons/chart_icon.svg";
import editIcon from "../../icons/edit_icon.svg";
import { STYLES, COLORS } from "../../globals";

const IconButton = props => {
  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const Icon = styled.img`
    height: ${props => props.size || "19px"};
    margin: ${props => props.margin || "0 7px 0 0"};
  `;

  const ButtonLabel = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.color || COLORS.linkButtonIndigo};
    margin-right: 25px;
  `;

  //<img style={{width:20}} src={options} className="App-logo" alt="logo" />
  const { type } = props;

  if (type === "options") {
    return (
      <ButtonContainer>
        <Icon size={"36px"} margin={"0px"} src={optionIcon} />
      </ButtonContainer>
    );
  } else if (type === "edit") {
    return (
      <ButtonContainer>
        <Icon src={editIcon} />
        <ButtonLabel>{props.children}</ButtonLabel>
      </ButtonContainer>
    );
  } else if (type === "analyze") {
    return (
      <ButtonContainer>
        <Icon src={chartIcon} />
        <ButtonLabel>{props.children}</ButtonLabel>
      </ButtonContainer>
    );
  }
};

export default IconButton;

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
