import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/header.component';

function App() {
  const Step1 = () => <>Step1</>;
  const Step2 = () => <>Step2</>;
  const Step3 = () => <>Step3</>;
  const Result = () => <>Result</>;

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/reult" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
