import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      {/* Add other routes for transactions and setup pages if needed */}
      {/* <Route path="/transactions" component={Transactions} />
      <Route path="/setup" component={Setup} /> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);
