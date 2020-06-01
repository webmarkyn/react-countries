import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountriesList from '../CountriesList';
import './index.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <CountriesList />
      </Route>
      <Route path="/:country" exact>
        <h1>Country</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
