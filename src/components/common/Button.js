import React from 'react';

const Button = (props) => {
  const {
    title,
    onClick,
    type
  } = props
  return (
    <button
      className={`button ${type}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  )
}

export default Button;