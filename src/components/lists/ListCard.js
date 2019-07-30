import React from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const ListCard = (props) => {
  const { id, listName, items, creationDate, lastEditedBy } = props.list
  return (
    <div className="list-card-container" key={id}>
      <h3>{listName}</h3>
      <h3>{`Items added(${items.length}`})</h3>
      <h3>{`Created on: ${creationDate}`}</h3>
      <h3>{`Last modified by: ${lastEditedBy}`}</h3>
      <Button
        title="delete"
        onClick={() => null}
        type="cancel"
      />
      <Link to={`/editList/${id}`} >
        <Button
          title="Edit"
          onClick={() => null}
          type="secondary"
        />
      </Link>
    </div>
  )
}

export default ListCard;
