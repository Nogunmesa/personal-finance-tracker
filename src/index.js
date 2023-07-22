import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import Transactions from './Transactions';
import Setup from './setup'; // Import the Setup component

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/setup" component={Setup} /> {/* Add this route for Setup page */}
    </Switch>
  </Router>,
  document.getElementById('root')
);
