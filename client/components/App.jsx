import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { runtime } from 'regenerator-runtime';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import EnterZip from './EnterZip';
import CheeseBoard from './CheeseBoard';
import Summary from './Summary';

const App = (props) => {
  const [cheeses, setCheeses] = useState([]);
  const [basket, setBasket] = useState([]);

  // Update the state for cheeses available in a specific zipcode
  const handleCheeseData = (data) => {
    setCheeses(data);
  };

  // Update state for adding a specific cheese to your basket - will be passed to Summary component
  const addToBasket = (id) => {
    const basketArr = basket;

    for (let i = 0; i < cheeses.length; i++) {
      if (id == cheeses[i].cheese_id) {
        basketArr.push(cheeses[i]);
      }
    }
    setBasket(basketArr);
    console.log('This is your basket, line 31 App.jsx', basketArr);
  };

  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route
            exact
            path="/zipcode"
            render={() => <EnterZip handleCheeseData={handleCheeseData} />}
          />
          <Route
            exact
            path="/cheeseboard"
            render={() => <CheeseBoard cheeses={cheeses} addToBasket={addToBasket} />}
          />
          <Route exact path="/summary" render={() => <Summary basket={basket} />} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
