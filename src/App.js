import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/header.component';
import { Step1 } from '../src/Step1.js';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
