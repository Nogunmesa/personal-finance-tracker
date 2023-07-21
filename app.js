// Function to create a new account
function createAccount() {
  const accountType = document.getElementById('accountType').value;
  const accountName = document.getElementById('accountName').value;
  const currentAmount = parseFloat(document.getElementById('currentAmount').value);

  if (accountName && !isNaN(currentAmount)) {
      const account = {
          accountType: accountType,
          accountName: accountName,
          currentAmount: currentAmount
      };

      addAccountToList(account);
      clearFormFields();
  } else {
      alert("Please fill in all the fields with valid data.");
  }
}

// Function to add the new account to the list
function addAccountToList(account) {
  const accountsList = document.getElementById('accountsList');
  const listItem = document.createElement('li');
  listItem.textContent = `Type: ${account.accountType}, Name: ${account.accountName}, Amount: ${account.currentAmount}`;
  accountsList.appendChild(listItem);
}

// Function to clear form fields after creating an account
function clearFormFields() {
  document.getElementById('accountType').value = 'savings';
  document.getElementById('accountName').value = '';
  document.getElementById('currentAmount').value = '';
}

// Call this function when the page loads to set up any existing accounts
function setupExistingAccounts() {
  // Uncomment and use this function to populate accounts from server data if available.
  // Sample:
  // const existingAccounts = getAccountsFromServer();
  // if (existingAccounts) {
  //     for (const account of existingAccounts) {
  //         addAccountToList(account);
  //     }
  // }
}

// Call the setupExistingAccounts function to populate existing accounts on page load
setupExistingAccounts();
