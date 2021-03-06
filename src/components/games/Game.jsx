import React, { useState } from "react";
import styled from "styled-components";
import Engine from "../../engine";
import Button from "../buttons/Button";
import Card from "../cards/Card";
import { Deck } from "../deck/Deck";
import Dice from "../dices/Dice";


const GameWrapper = styled.div`
  border: 2px dotted aqua;
`;

const createCard = () => <Card id={Engine.utils.uuidv4()} />;

export default function Game() {
  const [diceValue, setDiceValue] = useState(1);
  const [deck, setDeck] = useState([]);

  const handleDiceRoll = () => {
    setDiceValue(Engine.dice.roll());
  };

  const handleAddCard = () => {
    setDeck(Engine.card.addCardToDeck(createCard(), deck));
  };

  const removeCard = () => {
    setDeck(Engine.card.removeCardFromDeck(deck))
  }

  const handleTest = () => {
    console.log(createCard());
  };

  return (
    <GameWrapper>
      <Deck cards={deck} />
      <Button label="Тестировать функцию" onClick={handleTest} />
      <Dice value={diceValue} onClick={handleDiceRoll} />
      <Button label="Бросить кубик" onClick={handleDiceRoll} />
      <Button label="Добавить карту" onClick={handleAddCard} />
      <Button label="Удалить карту" onClick={removeCard} />
      <Deck cards={deck} />
    </GameWrapper>
  );
}
