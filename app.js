// JavaScript code to handle account form submission
document.getElementById('accountForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form values
    const accountType = document.getElementById('accountType').value;
    const accountName = document.getElementById('accountName').value;
    const currentAmount = parseFloat(document.getElementById('currentAmount').value);
  
    // Validate input (you can add more validation as needed)
    if (!accountName || isNaN(currentAmount)) {
      alert('Please fill in all fields correctly.');
      return;
    }
  
    // Create an object to store the account details
    const accountData = {
      type: accountType,
      name: accountName,
      amount: currentAmount
    };
  
    // Store the account data locally (you can use local storage, cookies, or a database)
    // For this example, we'll use local storage
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accounts.push(accountData);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  
    // Clear the form fields after submission
    document.getElementById('accountType').selectedIndex = 0;
    document.getElementById('accountName').value = '';
    document.getElementById('currentAmount').value = '';
  
    // Redirect to the dashboard page after submission
    window.location.href = 'index.html';
  });
  
  // JavaScript code to display account data on the dashboard
  const accountList = document.getElementById('accountList');
  
  function displayAccounts() {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accountList.innerHTML = '';
  
    accounts.forEach(account => {
      const accountCard = document.createElement('div');
      accountCard.classList.add('account-card');
  
      const accountType = document.createElement('p');
      accountType.textContent = `Type: ${account.type}`;
  
      const accountName = document.createElement('p');
      accountName.textContent = `Name: ${account.name}`;
  
      const currentAmount = document.createElement('p');
      currentAmount.textContent = `Current Amount: $${account.amount}`;
  
      accountCard.appendChild(accountType);
      accountCard.appendChild(accountName);
      accountCard.appendChild(currentAmount);
  
      accountList.appendChild(accountCard);
    });
  }
  
  displayAccounts();
  