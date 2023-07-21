// server.js
const express = require('express');
const app = express();
const port = 3000;

// Sample data for existing accounts
const existingAccounts = [
  { id: 1, accountType: "savings", accountName: "My Savings", currentAmount: 5000 },
  { id: 2, accountType: "checkings", accountName: "My Checking", currentAmount: 2500 },
  { id: 3, accountType: "savings", accountName: "Vacation Fund", currentAmount: 1000 },
];

// API endpoint to fetch account data
app.get('/api/accounts', (req, res) => {
  res.json(existingAccounts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
