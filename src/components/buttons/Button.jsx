import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 8px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid blue;
  box-shadow: 0 0 4px blue;
  color: blue;
  :hover {
    opacity: 0.6;
  }
`;

export const Button = ({ label }) => {
  if (!label) return null;
  return <ButtonStyled type="button">{label}</ButtonStyled>;
};

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: "",
};
