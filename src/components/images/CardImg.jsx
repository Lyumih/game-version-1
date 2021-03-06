import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

CardImg.propTypes = {
  imgSrc: PropTypes.string,
};

CardImg.defaultProps = {
  imgSrc: "/img/cards/default-card-img.svg",
};

export default function CardImg({ imgSrc }) {
  return (
    <ImageWrapper>
      <Image src={imgSrc} alt={imgSrc} />
    </ImageWrapper>
  );
}
