// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch account data from the server when the component mounts
    fetch('/api/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.error('Error fetching accounts:', error));
  }, []);

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.accountName} ({account.accountType}): ${account.currentAmount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
