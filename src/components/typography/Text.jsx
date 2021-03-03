import React from 'react';
import PropTypes from 'prop-types'
export const Text = ({text}) => <span>{text}</span>

Text.propTypes = {
  text: PropTypes.string
}

Text.defaultProps = {
  text: ""
}