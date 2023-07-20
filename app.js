const accountList = document.getElementById('accountList');
const setupForm = document.getElementById('setupForm');
const typeInput = document.getElementById('type');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');

setupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const type = typeInput.value;
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  // Get the stored accounts from localStorage or initialize an empty array
  const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // Add the new account to the array
  storedAccounts.push({ type, name, amount });

  // Store the updated accounts array in localStorage
  localStorage.setItem('accounts', JSON.stringify(storedAccounts));

  // Display the updated accounts on the dashboard
  displayAccounts();

  // Clear the form inputs
  setupForm.reset();
});

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

// Call displayAccounts() to initially display the accounts on the dashboard
displayAccounts();
