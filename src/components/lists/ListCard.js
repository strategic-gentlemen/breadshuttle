import React from 'react';

const ListCard = (props) => {
  const { id, listName, items } = props.list
  return (
    <div className="list-card-container" key={id}>
      <h1 onClick={props.edit}>{listName}</h1>
      <h3>{`${items.length}`} items</h3>
    </div>
  )
}

export default ListCard;
