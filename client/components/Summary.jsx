import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import BasketItem from './BasketItem';

const Summary = (props) => {
  const { basket } = props;
  console.log(basket);

  const summaryObj = {
    zipcode: basket[0].zip,
    items: [],
    originalTotal: 0,
    afterDiscount: 0,
    yourSavings: 0,
    tax: 0,
    finalTotal: 0,
  };

  for (let i = 0; i < basket.length; i++) {
    const { zip, name, country, price, discountedTotal, savings } = basket[i];

    summaryObj.items.push(
      <BasketItem
        key={i}
        zip={zip}
        name={name}
        country={country}
        price={price}
        discountedTotal={discountedTotal}
        savings={savings}
      />
    );

    // calculate original price and totals and save them in a summaryObj
    summaryObj['originalTotal'] += Number(price);
    summaryObj['afterDiscount'] += discountedTotal;
    summaryObj['yourSavings'] += savings;
  }

  // calculate tax based on discounted total
  const yourTax = summaryObj['afterDiscount'] * 0.1025;
  summaryObj['tax'] = yourTax;

  // calculate final total based on tax added to discounted total
  summaryObj.finalTotal = summaryObj['afterDiscount'] + summaryObj['tax'];

  console.log(summaryObj);

  return (
    <div>
      {summaryObj.items}
      <h2>Original total => {summaryObj.originalTotal.toFixed(2)}</h2>
      <h4 className="savings">Total Savings => {summaryObj.yourSavings.toFixed(2)}</h4>
      <h3>Your Total after savings => {summaryObj.afterDiscount.toFixed(2)}</h3>
      <h5> + tax ={summaryObj.tax.toFixed(2)}</h5>
      <h1>
        <strong>Total =</strong>
        {summaryObj.finalTotal.toFixed(2)}
      </h1>
    </div>
  );
};

export default Summary;
