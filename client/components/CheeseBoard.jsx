import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Dropdown } from 'reactstrap';
import CheeseSlice from './CheeseSlice';

const CheeseBoard = (props) => {
  const { cheeses } = props;

  const cheeseArr = [];

  for (let i = 0; i < cheeses.length; i++) {
    const { name, country, discountedTotal, cheese_id } = cheeses[i];

    cheeseArr.push(
      <CheeseSlice
        key={i}
        name={name}
        country={country}
        discountedTotal={discountedTotal}
        id={cheese_id}
        addToBasket={props.addToBasket}
      />
    );
  }

  let history = useHistory();

  const goToBasket = () => {
    history.push('/summary');
  };

  return (
    <div className="cheese-board-page">
      <Form>
        <FormGroup>
          <Input placeholder="Filter by name" />
        </FormGroup>

        <Dropdown placeholder="Filter by country">Placeholder</Dropdown>
      </Form>

      <div>{cheeseArr}</div>
      <Button onClick={goToBasket}>Go to Basket</Button>
    </div>
  );
};

export default CheeseBoard;
