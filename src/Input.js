import React from 'react'
import propTypes from "prop-types";

export const Input = ({ secretWord }) => {
  return (
    <div data-test="input-component">
      
    </div>
  )
}

Input.propTypes = {
  secretWord: propTypes.string.isRequired
}

Input.defaultProps = {
  secretWord: "party" 
}
