import React from 'react';

const ListCard = (props) => {
  return (
    <div className="list-card-container">
      <h3>{props.listName}</h3>
    </div>
  )
}

export default ListCard;
