import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CheeseSlice = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.country}</p>
      <h5>{props.discountedTotal}</h5>
      <Button onClick={() => props.addToBasket(props.id)}>Add to Basket</Button>
    </div>
  );
};

export default CheeseSlice;
