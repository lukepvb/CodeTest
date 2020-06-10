import React from 'react';
import { Badge, Button } from 'reactstrap';
import { FaShoppingBasket } from 'react-icons/fa';

const YourCartBadge = (props) => {
  return (
    <div className="your-cart-badge-div">
      <h1>
        <Button id="cart-count" onClick={props.goToBasket} color="light" solid>
          <text>Your Basket</text>
          <FaShoppingBasket id="cart-badge" />
          <Badge color="primary">{props.count}</Badge>
        </Button>
      </h1>
    </div>
  );
};

export default YourCartBadge;
