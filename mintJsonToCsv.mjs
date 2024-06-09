import fs from 'node:fs';
import path from 'node:path';

// Create the CSV header
let csv = 'Date,Description,Original Description,Amount,Transaction Type,Category,Account Name,Labels,Notes\n';

// Get all files in the current directory
const files = fs.readdirSync('./');

// Find the accounts file
const accountsFile = files.find(file => file.startsWith('accounts_users_'));

// Read the accounts file
const accounts = JSON.parse(fs.readFileSync(accountsFile));

// Filter the files to only include transaction files
const transactionFiles = files.filter(file => file.startsWith('transactions_users_'));

for (const file of transactionFiles) {
    // Read the transactions file
    const transactions = JSON.parse(fs.readFileSync(path.join('./', file)));

    for (const transaction of transactions) {
        // Get the account URN for the transaction
        const accountUrn = transaction.associations.find(association => association.startsWith('urn:account:fdp'));

        // Get the account name for the transaction
        const account = accounts.find(acc => acc.accountId === accountUrn);
        let accountName = account ? account.nickName : '';
        accountName = accountName.replace(',', '_');

        // Format the transaction data
        let date = null;
        if (transaction.transactionDate) {
            date = transaction.transactionDate.split('T')[0];
        }

        if (transaction.postedDate) {
            date = transaction.postedDate.split('T')[0];
        }

        let description = transaction.description;
        description = description.replace(',', '_');

        const amount = transaction.amount.toFixed(2);
        const transactionType = transaction.transactionType ? transaction.transactionType.toLowerCase() : '';
        let category = transaction.categoryName;
        category = category.replace(',', '_');

        const labels = '';
        const notes = '';

        // Append the transaction data to the CSV
        csv += `${date},${description},${description},${amount},${transactionType},${category},${accountName},${labels},${notes}\n`;
    }
}

// Write the CSV file
fs.writeFileSync('./transactions.csv', csv);``