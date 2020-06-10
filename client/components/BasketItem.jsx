import React from 'react';
import { GiCheeseWedge } from 'react-icons/gi';

const BasketItem = (props) => {
  const marketPrice = Number(props.price).toFixed(2);
  const savings = Number(props.savings).toFixed(2);
  const discount = Number(props.discountedTotal).toFixed(2);
  return (
    <div className="basket-item-container">
      <div className="basket-item">
        <hr />
        <h3 className="h3-basket">
          <GiCheeseWedge className="cheese-wedge" />
          {props.name}

          <h5 className="h5-basket-country">{props.country}</h5>
        </h3>
        <h5 className="h5-basket-market-price">Market Price = $ {marketPrice}</h5>
        <h5 className="h5-basket-savings">Local Savings = -$ {savings}</h5>
        <h5 className="h5-basket-discount-total">Discounted Total = $ {discount}</h5>
      </div>
      <hr />
    </div>
  );
};

export default BasketItem;
