import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BasketItem = (props) => {
  return (
    <div>
      <h3>
        {props.name},{' '}
        <div>
          <h5>{props.country}</h5>
        </div>
      </h3>
      <h5>Base Price = $ {props.price}</h5>
      <h5>Local Savings = -$ {props.savings}</h5>
      <h5>Discount Total = $ {props.discountedTotal}</h5>
    </div>
  );
};

export default BasketItem;
