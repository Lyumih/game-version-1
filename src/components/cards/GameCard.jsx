import PropTypes from "prop-types";
import React from "react";
import { CardImg } from "../images/CardImg";
import { Text } from "../typography/Text";
import { Title } from "../typography/Title";
import Card from "./Card";
import styles from "./GameCard.module.css";
import styled from "styled-components"

const Divider = styled.div`
  border-bottom: 2px solid black;
`

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

export default function GameCard({id, rarity, title, text, imgSrc, children }) {
  return (
    <Card id={id} rarity={rarity}>
      <div className={styles.img}>
        <CardImg imgSrc={imgSrc} />
      </div>
      <Divider />
      <div className={styles.textContainer}>
        <div className={styles.title}>
          <Title text={title} />
        </div>
        <div className={styles.text}>
          <Text text={text} />
        </div>
      </div>
      {children}
    </Card>
  );
}
