import React from 'react';
import PropTypes from 'prop-types'

import styles from './Title.module.css'

export const Title = ({text}) => <span className={styles.title}>{text}</span>

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: ""
}