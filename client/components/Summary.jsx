import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Summary = (props) => {
  const { basket } = props;

  console.log(basket);

  // THIS IS WHERE YOU LEFT OFF

  const checkoutObj = {
    customer_zip: null,
    items: [],
    basketTotal: 0,
    salesTax: 0,
    savings: 0,
  };

  // iterate over the basket array
  for (let i = 0; i < basket.length; i++) {
    // pull out the necessary data from the array of cheeses in your basket
    const { name } = basket[i];
    // check to see if the name exists in checkoutObj
    if (!checkoutObj[name]) {
      checkoutObj[name] = 1;
    } else {
      checkoutObj[name] += 1;
    }
    // If it doesnt, initialize it with a count of 1;
    // if it does, increase the count of that particular cheese
  }

  return (
    <div>
      <h1>This is your basket summary page</h1>
    </div>
  );
};

export default Summary;
