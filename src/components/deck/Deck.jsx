import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const DeckStyled = styled.div`
  // padding: 10px;
  display: flex;
  overflow: auto;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
`;

const CardWrapper = styled.div`
  padding: 10px;
  display: flex;
  * + * {
    margin-left: 20px;
  }
`;

export const Deck = ({ cards, children }) => {
  return (
    <DeckStyled>
      <CardWrapper>{cards}</CardWrapper>
      {children}
    </DeckStyled>
  );
};

Deck.propTypes = {
  cards: PropTypes.array,
};

Deck.defaultProps = {
  cards: [],
};
