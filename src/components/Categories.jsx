import React from "react";
import styled from "styled-components";
import IconButton from "./buttons/IconButton";
import { STYLES } from "../globals";
const { SPACE_SM } = STYLES;

const Categories = props => {
  const CategoryDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: ${props =>
      props.alternateColor ? "#437EE6" : "#4957FD"};
    color: #ffffff;
    padding: 3px 8px 2px;
    margin-right: 8px;
    border-radius: 5px;
  `;

  const CategoryContainer = styled.div`
    position: absolute;
    bottom: calc(${SPACE_SM} / 2);
    left: ${SPACE_SM};
    display: flex;
  `;

  const { types } = props;

  return types.length > 0 ? (
    <CategoryContainer>
      {types.map((category, index) => (
        <CategoryDisplay
          key={index}
          alternateColor={category.typeDescription !== "Office"}
        >
          {category.typeDescription}
        </CategoryDisplay>
      ))}
    </CategoryContainer>
  ) : (
    false
  );
};

export default Categories;
