// server.js
const express = require('express');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Sample data for existing accounts (replace this with your actual data or database integration)
const existingAccounts = [
  { id: 1, accountType: "savings", accountName: "My Savings", currentAmount: 5000 },
  { id: 2, accountType: "checkings", accountName: "My Checking", currentAmount: 2500 },
  { id: 3, accountType: "savings", accountName: "Vacation Fund", currentAmount: 1000 },
];

// API endpoint to fetch account data
app.get('/api/accounts', (req, res) => {
  res.json(existingAccounts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
