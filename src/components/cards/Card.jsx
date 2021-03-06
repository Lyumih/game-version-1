import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.css";

Card.propTypes = {
  rarity: PropTypes.oneOf(["common", "rare", "legendary"]),
  id: PropTypes.string
};

Card.defaultProps = {
  rarity: "common",
  id: ""
};

export default function Card ({ rarity, id, children}) {
  return (
    <div className={`${styles.layout} ${styles[rarity]}`}>
      {children}
    </div>
  );
};

