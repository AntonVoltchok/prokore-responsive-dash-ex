import React from "react";
import styled from "styled-components";
import CardActionBar from './CardActionBar';
import mockMap from './../mock-imgs/mock-map.png'
import { STYLES } from "../globals";
const { PADDING_MD: SPACE_MD } = STYLES;
//import options from './icons/options_icon.svg';
// <img style={{width:20}} src={options} className="App-logo" alt="logo" />

const Card = (props) => {
  const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 455px;
    min-width: 400px;
    max-width: 425px;
    width: 100%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08),
      0px 3px 9px rgba(0, 0, 0, 0.05);
  `;

  const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cfcfcf;
    width: 100%;
    position: relative;
  `;

  const MapBox = styled.img`
    background: hsla(218, 30%, 90%, 1);
    height: ${props => props.height || "100px"};
    width: ${props => props.width || "100px"};
    border-radius: 5px;
    margin: 0 20px;
    position: absolute;
    bottom: 50px;
    right: 50px;
  `;

  const CardBottomWrapper = styled.div`
    margin: ${SPACE_MD};
  `;


  return (
    <CardWrapper>
      <ImageContainer>
        <MapBox src={mockMap}/>
      </ImageContainer>
      <CardBottomWrapper>
        <CardActionBar/>
      </CardBottomWrapper>
    </CardWrapper>
  );
};

export default Card;
