const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed

// Body parser middleware to parse JSON data
app.use(express.json());

// Temporary in-memory storage for accounts
let accounts = [];

// Define API endpoints here
// Add a new account
app.post('/api/accounts', (req, res) => {
    const { type, name, amount } = req.body;
    if (!type || !name || isNaN(amount)) {
      return res.status(400).json({ error: 'Invalid input. Please provide valid account data.' });
    }
  
    const newAccount = { type, name, amount };
    accounts.push(newAccount);
  
    res.status(201).json(newAccount);
  });
  
  // Get all accounts
  app.get('/api/accounts', (req, res) => {
    res.json(accounts);
  });
  
  // Get account summaries
  app.get('/api/accounts/summary', (req, res) => {
    const totalBalance = accounts.reduce((total, account) => total + account.amount, 0);
    const totalSavings = accounts.filter(account => account.type === 'savings').reduce((total, account) => total + account.amount, 0);
  
    res.json({ totalBalance, totalSavings });
  });
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
    