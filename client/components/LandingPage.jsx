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
      <div className="landing-page-type">
        <h1>YOUR LOCAL PURVEYOR OF FINE CHEESES</h1>
        <h5>Currently serving Los Angeles County!</h5>
      </div>
      <div className="button-landing-div">
        <Button id="button-get-started" onClick={handleClick}>
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
