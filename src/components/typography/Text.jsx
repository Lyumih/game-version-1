import React from 'react';
import PropTypes from 'prop-types'

Text.propTypes = {
  text: PropTypes.string
}

Text.defaultProps = {
  text: ""
}

export default function Text ({text}){
  return <div>{text}</div>
} 