// src/App.js
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch account data from the server API
    axios.get('http://localhost:3000/api/accounts')
      .then((response) => setAccounts(response.data))
      .catch((error) => console.error('Error fetching accounts:', error));
  }, []);

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.accountName} ({account.accountType}): ${account.currentAmount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));

