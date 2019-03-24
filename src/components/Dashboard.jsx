import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ResponsiveContainer from "./ResponsiveContainer";
import { STYLES } from "../globals";
const { SPACE_MD } = STYLES;

const Dashboard = props => {
  const DashboardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${SPACE_MD} 0 0 0;
  `;

  const {data} = props;

  return (
    <DashboardContainer>
      <ResponsiveContainer>
        {data.map((itemData, index) => (
          <Card key={index} data={itemData} />
        ))}
      </ResponsiveContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
