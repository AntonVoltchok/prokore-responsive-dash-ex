import React from "react";
import styled from "styled-components";
import CardActionBar from "./CardActionBar";
import mockMap from "./../mock-imgs/mock-map.png";
import { STYLES, COLORS } from "../globals";
const {SPACE_MD, SPACE_SM, SPACE_LG} = STYLES;
//import options from './icons/options_icon.svg';
// <img style={{width:20}} src={options} className="App-logo" alt="logo" />

const Card = props => {
  const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${SPACE_LG};
    border-radius: 3px;
    height: 455px;
    min-width: 400px;
    max-width: 425px;
    width: 100%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08), 0px 3px 9px rgba(0, 0, 0, 0.05);
  `;

  const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      320deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    width: 100%;
    height: 270px;
    position: relative;
    border-bottom: 3px solid ${COLORS.lightSlateBlue};
  `;

  const MapBox = styled.img`
    background: hsla(218, 30%, 90%, 1);
    height: ${props => props.height || "100px"};
    width: ${props => props.width || "100px"};
    border-radius: 5px;
    border: 3px solid ${COLORS.lightSlateBlue};
    margin: 0 20px;
    position: absolute;
    bottom: -25px;
    right: 15px;
  `;

  const InfoActionContainer = styled.div`
    height: 195px;
    width: 100%;
    padding: ${SPACE_MD} ${SPACE_SM} ${SPACE_SM};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `;

  return (
    <CardWrapper>
      <ImageContainer>
        <MapBox src={mockMap} />
      </ImageContainer>
      <InfoActionContainer>
        <div>TEMP Property Title</div>
        <div>TEMP Address and other info</div>
        <CardActionBar />
      </InfoActionContainer>
    </CardWrapper>
  );
};

export default Card;
