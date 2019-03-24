import React from "react";
import styled from "styled-components";
import device from './utils/device';
import { STYLES } from "../globals";
const { PADDING_SM } = STYLES;


const Dashboard = (props) => {
    const ResponsiveWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
    padding: 0 ${PADDING_SM};

  @media ${device.desktop} {
    max-width: 1400px;
  }
  `;

  //   const MockNavItem = styled.div`
  //   background: hsla(218, 30%, 90%, 1);
  //   height: ${props => props.height || "22px"};
  //   width: ${props => props.width || "70px"};
  //   border-radius: 5px;
  //   margin: 0 20px;
  // `;

    return (
        <ResponsiveWrapper>
          {props.children}
        </ResponsiveWrapper>
    );
};

export default Dashboard;
