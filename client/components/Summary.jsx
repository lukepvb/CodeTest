import React from 'react';
import BasketItem from './BasketItem';
import { FiArrowDownCircle } from 'react-icons/fi';

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
    <div className="summary-div">
      <div className="summary-matte">
        <div className="summary-container">
          <h1 className="summary-header">Summary</h1>
          <h5 className="h5-summary">{props.count} Items in Basket</h5>
          {summaryObj.items}
          <h2 className="h2-summary">Original total = ${summaryObj.originalTotal.toFixed(2)}</h2>
          <h4 className="h4-summary-savings">
            Total Savings = -${summaryObj.yourSavings.toFixed(2)}
          </h4>
          <h5 className="h5-summary"> + tax (10.25%) = ${summaryObj.tax.toFixed(2)}</h5>

          <FiArrowDownCircle className="icon-down-summary" />

          <h1 className="h1-summary">
            <strong className="h1-summary">Total = </strong>${summaryObj.finalTotal.toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Summary;
