import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-size: 20px;
`;

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: "",
};

export default function Title({ text }) {
  return <TitleWrapper>{text}</TitleWrapper>;
}
