import React from 'react';

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <div className='img-holder' />
      <div className="item-details">
        <h1>{props.itemName}</h1>
        <div className="qty-row">
          <i className="far fa-minus-square"></i>
          <h4>{props.qty}</h4>
          <i className="far fa-plus-square"></i>
        </div>
      </div>
      <div className="cost">
        {`$${props.cost}`}
      </div>
    </div>
  )
}

export default ItemCard;