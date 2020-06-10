import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import CheeseSlice from './CheeseSlice';
import YourCartBadge from './YourCartBadge';
import { FaShoppingBasket } from 'react-icons/fa';

const CheeseBoard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [input, setInput] = useState('');
  const [cheeseRender, setCheeseRender] = useState([]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { cheeses } = props;

  let cheeseArr = [];
  const dropDownArr = [];
  const dropDownRender = [];
  let isSpecified = false;

  const handleCountryFilter = (e) => {
    const originCountry = e.target.value;
    isSpecified = true;
    filterCheese(originCountry, isSpecified);
    setCheeseRender(cheeseArr);
  };

  const handleCheeseSearch = (search) => {
    console.log(search);
    const userInput = search;

    filterCheese(undefined, false, search);
    setCheeseRender(cheeseArr);
  };
  // create a function that filters the returned results based on name or country of origin

  const filterCheese = (origin = undefined, flag = false, cheese = undefined) => {
    cheeseArr = [];
    for (let i = 0; i < cheeses.length; i++) {
      const { name, country, discountedTotal, cheese_id, price } = cheeses[i];

      const discountPrice = Number(discountedTotal).toFixed(2);
      const basePrice = Number(price).toFixed(2);

      // check to see if country is already in dropDownArr (if it is not, push it in)

      dropDownArr.push(country);

      // sort by Origin based on what is passed in  through dropdown selection
      if (origin == country && flag) {
        cheeseArr.push(
          <CheeseSlice
            key={i}
            name={name}
            country={country}
            discountedTotal={discountPrice}
            price={basePrice}
            id={cheese_id}
            addToBasket={props.addToBasket}
          />
        );
      } else if (!origin && !cheese) {
        cheeseArr.push(
          <CheeseSlice
            key={i}
            name={name}
            country={country}
            price={basePrice}
            discountedTotal={discountPrice}
            id={cheese_id}
            addToBasket={props.addToBasket}
          />
        );
      } else if (!origin && cheese) {
        const cheeseLower = cheese.toLowerCase();
        const nameLower = name.toLowerCase();

        if (nameLower.includes(cheeseLower)) {
          cheeseArr.push(
            <CheeseSlice
              key={i}
              name={name}
              country={country}
              price={basePrice}
              discountedTotal={discountPrice}
              id={cheese_id}
              addToBasket={props.addToBasket}
            />
          );
        }
      }
    }
  };

  filterCheese();

  const reset = () => {
    filterCheese();
    setCheeseRender(cheeseArr);
  };

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
      <div className="your-cart">
        <YourCartBadge id="your-cart-badge" goToBasket={goToBasket} count={props.count} />
      </div>

      <div className="cheese-search">
        <Form className="enter-cheese-form">
          <FormGroup>
            <Input
              type="text"
              name="cheese-search"
              id="cheese-search"
              placeholder="Enter cheese name..."
              onChange={(e) => setInput(e.target.value)}
            />
            <Button id="submit-button" onClick={() => handleCheeseSearch(input)}>
              SEARCH
            </Button>
          </FormGroup>
        </Form>
      </div>
      <h4 id="h4-or">or</h4>
      <div className="dropdown-container">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle id="dropdown-toggle-button" caret>
            FILTER BY COUNTRY
          </DropdownToggle>
          <DropdownMenu>{dropDownRender}</DropdownMenu>
        </Dropdown>
        <Button id="reset-button" onClick={() => reset()}>
          RESET FILTERS
        </Button>
      </div>

      <div className="cheese-render-container">
        <div className="cheese-arr-div">{cheeseArr}</div>
      </div>
    </div>
  );
};

export default CheeseBoard;
