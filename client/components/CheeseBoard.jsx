import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import CheeseSlice from './CheeseSlice';

const CheeseBoard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cheeseRender, setCheeseRender] = useState([]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { cheeses } = props;

  let cheeseArr = [];
  const dropDownArr = [];
  const dropDownRender = [];
  let isSpecified = false;

  const handleCountryFilter = (e) => {
    const originCountry = e.target.value;
    console.log('line 35', cheeseArr);
    isSpecified = true;
    filterCheese(originCountry, isSpecified);
    setCheeseRender(cheeseArr);
  };
  // create a function that filters the returned results based on name or country of origin

  const filterCheese = (origin, flag) => {
    cheeseArr = [];
    for (let i = 0; i < cheeses.length; i++) {
      const { name, country, discountedTotal, cheese_id } = cheeses[i];

      // check to see if country is already in dropDownArr (if it is not, push it in)

      dropDownArr.push(country);

      // sort by Origin based on what is passed in  through dropdown selection
      if (origin == country && flag) {
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
      } else if (!origin) {
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
    }
  };

  filterCheese();

  const dropDownFilter = [...new Set(dropDownArr)];

  dropDownFilter.forEach((country, i) => {
    dropDownRender.push(
      <DropdownItem key={i} value={country} onClick={(e) => handleCountryFilter(e)}>
        {country}
      </DropdownItem>
    );
  });

  let history = useHistory();

  const goToBasket = () => {
    history.push('/summary');
  };

  if (cheeseRender.length > 0) {
    cheeseArr = cheeseRender;
  }

  return (
    <div className="cheese-board-page">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filter by Country</DropdownToggle>
        <DropdownMenu>{dropDownRender}</DropdownMenu>
      </Dropdown>

      <div>{cheeseArr}</div>
      <Button onClick={goToBasket}>Go to Basket</Button>
    </div>
  );
};

export default CheeseBoard;
