import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import LogoZipPage from '../assets/initial_assets/Design Elements/img/FFC_logo_2_dark';
import { FiArrowDownCircle } from 'react-icons/fi';
import { GiCheeseWedge } from 'react-icons/gi';

const EnterZip = (props) => {
  // initialize state for zipcode that will be entered and the cheeses that we will store
  // when we get back data from the zipcode
  const [zip, setZip] = useState('');

  // bring in useHistory to push to correct route based on data received
  let history = useHistory();

  // handle the onchange user input to set the state for zip
  const handleZipInput = (input) => {
    setZip(input);
    console.log(zip);
  };

  // handle the submited zipcode using a fetch request, storing the received cheese results using setCheese
  async function handleZipSubmit(event) {
    event.preventDefault();

    const postData = { zipCode: zip };

    console.log(postData);

    fetch('/api/zipcode', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((cheeseData) => {
        props.handleCheeseData(cheeseData);
      });

    // after we fetch the cheeses in that zipcode, we will route to the cheeseboard component where we will
    // render the results
    history.push('/cheeseboard');
  }

  return (
    <div className="enter-zipcode-page">
      <img src={LogoZipPage} className="logo-zipcode-page" />

      <h1 id="zip-header">Simply enter your zip code below</h1>

      <Form className="enter-zipcode-form-group">
        <FormGroup>
          <Input
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="Enter your zip code"
            onChange={(e) => handleZipInput(e.target.value)}
          />
        </FormGroup>
      </Form>
      <div className="icon-down-div">
        <FiArrowDownCircle className="icon-down" />
      </div>

      <div className="button-zip-submit-div">
        <Button id="button-zip-submit" onClick={handleZipSubmit}>
          CUT TO THE
          <GiCheeseWedge className="icon-cheese" />
        </Button>
      </div>
    </div>
  );
};

export default EnterZip;
