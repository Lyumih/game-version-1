import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const rarityMixin = (rarity) => {
  switch (rarity) {
    case "common":
      return css`
        border-color: gray;
        box-shadow: 0 0 8px gray;
      `;
    case "rare":
      return css`
        border-color: blue;
        box-shadow: 0 0 8px blue;
      `;
    case "legendary":
      return css`
        border-color: gold;
        box-shadow: 0 0 8px gold;
      `;
    default:
      return "";
  }
};

const CardStyled = styled.div`
  width: 150px;
  height: 250px;
  min-width: 150px;
  min-height: 250px;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  ${(props) => rarityMixin(props.rarity)}
`;

Card.propTypes = {
  rarity: PropTypes.oneOf(["common", "rare", "legendary"]),
  id: PropTypes.string,
};

Card.defaultProps = {
  rarity: "common",
  id: "",
};

export default function Card({ rarity, id, children }) {
  return (
    <CardStyled rarity={rarity} cardId={id}>
      {children}
    </CardStyled>
  );
}
