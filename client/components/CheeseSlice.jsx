import React from 'react';
import { Button } from 'reactstrap';
import { FaShoppingBasket } from 'react-icons/fa';
import { GiCheeseWedge } from 'react-icons/gi';

const CheeseSlice = (props) => {
  return (
    <div className="cheese-slice">
      <h2 id="cheese-name">
        <GiCheeseWedge className="cheese-wedge" />
        {props.name}
      </h2>
      <h4 id="cheese-origin">{props.country}</h4>
      <h5 id="cheese-base-price">Their price => ${props.price}</h5>
      <h2 id="cheese-discount-price">Our price => ${props.discountedTotal}</h2>
      <Button id="add-to-basket-button" onClick={() => props.addToBasket(props.id)}>
        Add to <FaShoppingBasket className="icon-basket-slice" />
      </Button>
    </div>
  );
};

export default CheeseSlice;
