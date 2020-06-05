import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" render={() => <LandingPage />} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
