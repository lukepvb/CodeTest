import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
      <Form>
        <FormGroup>
          <Label for="zipcode">Enter Your Zip code</Label>
          <Input
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="Enter your zip code"
            onChange={(e) => handleZipInput(e.target.value)}
          />
        </FormGroup>
        <Button className="button-zip-submit" onClick={handleZipSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EnterZip;
