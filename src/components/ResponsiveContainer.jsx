import React from "react";
import styled from "styled-components";
import device from "./utils/device";
import { STYLES } from "../globals";
const { PADDING_SM } = STYLES;

const ResponsiveContainer = props => {
  const ResponsiveWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 ${PADDING_SM};
    transition: ".3s all ease";
    @media (min-width: 1200px) {
      width: 95vw;
    }
    @media (min-width: 1420px) {
      width: 90vw;
    }
  `;

  /*   tablet: "768px",

  @media ${device.desktop} {
        min-width: 1500px;
      }
  laptop: "1024px",
  laptopLg: "1440px",
  desktop: "1920px" */

  return <ResponsiveWrapper>{props.children}</ResponsiveWrapper>;
};

export default ResponsiveContainer;
