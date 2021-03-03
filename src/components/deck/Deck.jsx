import React from 'react';
import styles from './Deck.module.css'
import PropTypes from 'prop-types'

export const Deck = ({cards, children}) => {
  return (
    <div className={styles.deck}>
      {cards}
      {children}
    </div>
  )
}

Deck.propTypes = {
  cards: PropTypes.array
}

Deck.defaultProps = {
  cards: []
}



