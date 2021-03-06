import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const DeckStyled = styled.div`
  // padding: 10px;
  height: 300px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
`;

const CardWrapper = styled.div`
  padding: 10px;
  display: flex;
  overflow: auto;
  * + * {
    margin-left: 20px;
  }
`;

const ControllWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

Deck.propTypes = {
  cards: PropTypes.array,
  id: PropTypes.string
};

Deck.defaultProps = {
  cards: [],
  id: ''
};

export default function Deck({ cards, children }) {
  return (
    <DeckStyled>
      <ControllWrapper>{children}</ControllWrapper>
      <CardWrapper>{cards}</CardWrapper>
    </DeckStyled>
  );
};
