import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.css";

export const Card = ({ rarity , children}) => {
  return (
    <div className={`${styles.layout} ${styles[rarity]}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  rarity: PropTypes.oneOf(["common", "rare", "legendary"]),
};

Card.defaultProps = {
  rarity: "common",
};


