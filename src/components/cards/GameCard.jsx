import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import { CardImg } from "../images/CardImg";
import styles from "./GameCard.module.css";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";

GameCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  rarity: PropTypes.oneOf(["common", "rare", "legendary"]),
};

GameCard.defaultProps = {
  title: "",
  text: "",
  rarity: "common",
  imgSrc: "/img/cards/default-card-img.svg",
};

export default function GameCard({ rarity, title, text, imgSrc, children }) {
  return (
    <Card rarity={rarity}>
      <div className={styles.img}>
        <CardImg imgSrc={imgSrc} />
      </div>
      <div className={styles.divider} />
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
