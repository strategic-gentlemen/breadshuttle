import React from 'react';

const Input = (props) => {
  const {
    placeholder,
    onChange,
    type,
    id
  } = props;

  return (
    <input
      className='input'
      id={id}
      placeholder={placeholder || ''}
      onChange={onChange}
      type={type || null}
    />
  );
}

export default Input;