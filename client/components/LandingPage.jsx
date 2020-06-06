import React from 'react';
import { useHistory } from 'react-router-dom';
import MainLogo from '../assets/initial_assets/Design Elements/img/FFC_logo_1';
import { Button } from 'reactstrap';

const LandingPage = (props) => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/zipcode');
  };
  return (
    <div className="landing-page">
      <div className="main-logo-container">
        <img src={MainLogo} className="main-logo-landing" />
      </div>
      <h1>Your Local Purveryor of Fine Cheeses</h1>
      <h4>Currently serving Los Angeles County!</h4>
      <div>
        <Button className="button-landing" onClick={handleClick}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
