import React from "react";

function ItemCard(props) {
  return (
    <div>
      <p>
        {props.item.name}
      </p>
      <p>
        {props.item.description}
      </p>
      <p>
        {props.item.image}
      </p>
      <p>
        {props.item.price}
      </p>
      <p>
        {props.item.location}
      </p>
      <p>
        {props.item.reservetime}
      </p>
    </div>
  )
}

export default ItemCard;