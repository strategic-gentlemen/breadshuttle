import React, { useState } from 'react';
import Input from '../common/Input';

const AddList = (props) => {
  const [listTitle, titleChange] = useState('');

  return (
    <div className="lists-container">
      <label htmlFor='title'>Title</label>
      <Input
        id='title'
        onChange={titleChange}
      />
    </div>
  )
}

export default AddList;