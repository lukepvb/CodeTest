import React from 'react';
import { Badge, Button } from 'reactstrap';
import { FaShoppingBasket } from 'react-icons/fa';

const YourCartBadge = (props) => {
  return (
    <div className="your-cart-badge-div">
      <h1>
        <Button onClick={props.goToBasket} color="light" solid>
          <FaShoppingBasket id="cart-badge" />
          <Badge color="primary">{props.count}</Badge>
        </Button>
      </h1>
    </div>
  );
};

export default YourCartBadge;
