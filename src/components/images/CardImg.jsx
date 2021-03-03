import React from "react";
import PropTypes from "prop-types";
import styles from "./CardImg.module.css";
export const CardImg = ({ imgSrc }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgSrc} alt={imgSrc} />
    </div>
  );
};

CardImg.propTypes = {
  imgSrc: PropTypes.string,
};

CardImg.defaultProps = {
  imgSrc: "/img/cards/default-card-img.svg",
};
