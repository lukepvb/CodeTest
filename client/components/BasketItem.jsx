import React from 'react';
import { BsPlus } from 'react-icons/bs';

const BasketItem = (props) => {
  return (
    <div>
      <h3>
        {props.name}
        <div>
          <h5>{props.country}</h5>
        </div>
      </h3>
      <h5>Base Price = $ {props.price}</h5>
      <h5>Local Savings = -$ {props.savings}</h5>
      <h5>Discount Total = $ {props.discountedTotal}</h5>
      <BsPlus />
    </div>
  );
};

export default BasketItem;
