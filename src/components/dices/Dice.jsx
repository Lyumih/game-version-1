import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const DiceStyled = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid black
`

Dice.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
}

Dice.defaultProps = {
  value: 1
}

export default function Dice({value, onClick}) {
  return (
    <DiceStyled onClick={onClick}>{value}</DiceStyled>
  )
}