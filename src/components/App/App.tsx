import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountriesList from '../CountriesList';
import './index.css';
import Country from '../Country';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <CountriesList />
      </Route>
      <Route path="/:country" exact>
        <Country />
      </Route>
    </Switch>
  </Router>
);

export default App;
