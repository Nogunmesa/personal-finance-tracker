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

// Array to store user-created accounts
let userAccounts = [];

// API endpoint to fetch all accounts
app.get('/api/accounts', (req, res) => {
  res.json(userAccounts);
});

// API endpoint to create a new account (POST request)
app.post('/api/accounts', express.json(), (req, res) => {
  const newAccount = req.body; // Assuming the client sends an object containing account details
  userAccounts.push(newAccount);
  res.status(201).json(newAccount);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
