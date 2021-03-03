import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

export const Button = ({label}) => {
  if (!label) return null
  return (
    <button type="button" className={styles.button}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string
}

Button.defaultProps = {
  label: ""
}