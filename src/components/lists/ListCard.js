import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = (props) => {
  const { id, listName, items } = props.list
  return (
    <div className="list-card-container" key={id}>
      <Link to={`/editList/${id}`} >
        <h3>{listName}</h3>
      </Link>
      <h3>{`(${items.length}`}) items</h3>
    </div>
  )
}

export default ListCard;
