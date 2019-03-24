import React from "react";
import styled from 'styled-components';
import {STYLES} from '../globals';
const {PADDING_SM} = STYLES;
// font-family: Open Sans, sans-serif;

const Header = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
    padding: 0 ${PADDING_SM};
  `;

  const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const MockItem = styled.div`
    background: hsla(218, 30%, 90%, 1);
    height: ${props => props.height || "22px"};
    width: ${props => props.width || "70px"};
    border-radius: 5px;
    margin: 0 20px;
  `;

  return (
    <HeaderWrapper>
      <ItemsContainer>
        <MockItem height={'35px'} width={'80px'} />
        <MockItem />
        <MockItem width={'50px'} />
        <MockItem />
      </ItemsContainer>
      <ItemsContainer>
        <MockItem />
        <MockItem />
        <MockItem />
      </ItemsContainer>
    </HeaderWrapper>
  );
};

export default Header;
