import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');

  useEffect(() => {
    // Fetch all accounts from the server
    axios.get('http://localhost:3000/api/accounts')
      .then((response) => setAccounts(response.data))
      .catch((error) => console.error('Error fetching accounts:', error));
  }, []);

  const createAccount = () => {
    // Send a POST request to create a new account
    axios.post('http://localhost:3000/api/accounts', {
      accountType,
      accountName,
      currentAmount: parseFloat(currentAmount),
    })
      .then((response) => {
        setAccounts([...accounts, response.data]);
        setAccountType('');
        setAccountName('');
        setCurrentAmount('');
      })
      .catch((error) => console.error('Error creating account:', error));
  };

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <div id="accountForm">
        <label for="accountType">Choose an account type:</label>
        <select id="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
          <option value="savings">Savings</option>
          <option value="checkings">Checkings</option>
        </select>
        <br />
        <label for="accountName">Account Name:</label>
        <input type="text" id="accountName" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="Enter account name" />
        <br />
        <label for="currentAmount">Current Amount:</label>
        <input type="number" id="currentAmount" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="Enter current amount" />
        <br />
        <button onClick={createAccount}>Create Account</button>
      </div>
      <div id="registeredAccounts">
        <h2>Registered Accounts:</h2>
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              {account.accountName} ({account.accountType}): ${account.currentAmount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
