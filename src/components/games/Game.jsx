import React, { useState } from "react";
import styled from "styled-components";
import Engine from "../../engine";
import Button from "../buttons/Button";
import Card from "../cards/Card";
import Deck from "../deck/Deck";
import Dice from "../dices/Dice";

import PropTypes from "prop-types";

const GameWrapper = styled.div`
  border: 2px dotted aqua;
`;

const createCard = () => <Card id={Engine.utils.uuidv4()} />;

const handleDiceRoll = (setDiceValue) => {
  setDiceValue(Engine.dice.roll());
};

const handleAddCard = (deck, setDeck) => {
  setDeck(Engine.card.addCardToDeck(createCard(), deck));
};

const removeCard = (deck, setDeck) => {
  setDeck(Engine.card.removeCardFromDeck(deck));
};

Game.propTypes = {
  id: PropTypes.string,
};

Game.defaultProps = {
  id: "",
};

export default function Game() {
  const [diceValue, setDiceValue] = useState(1);
  const [deck, setDeck] = useState([]);
  const [deckEnemy, setDeckEnemy] = useState(Array(4).fill(createCard()));

  const handleTest = (deck) => {
    console.log(deck);
  };

  return (
    <GameWrapper>
      <Deck cards={deckEnemy}>
        <Button
          label="Добавить карту"
          onClick={handleAddCard.bind(this, deckEnemy, setDeckEnemy)}
        />
        <Button
          label="Удалить карту"
          onClick={removeCard.bind(this, deckEnemy, setDeckEnemy)}
        />
      </Deck>

      {/* TESTED */}
      <Button
        label="Тестировать функцию"
        onClick={handleTest.bind(this, deck)}
      />
      {/* END TESTED */}

      <Dice value={diceValue} onClick={handleDiceRoll.bind(this, setDiceValue)} />
      <Button label="Бросить кубик" onClick={handleDiceRoll.bind(this, setDiceValue)} />

      <Deck cards={deck}>
        <Button
          label="Добавить карту"
          onClick={handleAddCard.bind(this, deck, setDeck)}
        />
        <Button
          label="Удалить карту"
          onClick={removeCard.bind(this, deck, setDeck)}
        />
      </Deck>
    </GameWrapper>
  );
}
