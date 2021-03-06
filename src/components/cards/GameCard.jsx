import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import CardImg from "../images/CardImg";
import Text from "../typography/Text";
import Title from "../typography/Title";
import Card from "./Card";

const Divider = styled.div`
  border-bottom: 2px solid black;
`;

const ContentTextWrapper = styled.div`
  text-align: center;
`;

const TitleWrapper = styled(Title)`
  margin-bottom: 10px;
`

const ImageWrapper = styled.div`
  padding: 10px;
  margin: auto;
  text-align: center;
  width: 120px;
  height: 120px;
`;

GameCard.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  rarity: PropTypes.oneOf(["common", "rare", "legendary"]),
};

GameCard.defaultProps = {
  id: "",
  title: "",
  text: "",
  rarity: "common",
  imgSrc: "/img/cards/default-card-img.svg",
};

export default function GameCard({
  id,
  rarity,
  title,
  text,
  imgSrc,
  children,
}) {
  return (
    <Card id={id} rarity={rarity}>
      <ImageWrapper>
        <CardImg imgSrc={imgSrc} />
      </ImageWrapper>
      <Divider />
      <ContentTextWrapper>
        <TitleWrapper text={title}/>
        <Text text={text} />
      </ContentTextWrapper>
      {children}
    </Card>
  );
}
