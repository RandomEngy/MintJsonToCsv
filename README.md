# Mint Data Export
Mint the budgeting software is gone, but your data may not be.  

This script converts the Mint data provided by [Intuit's Data & Privacy page](https://accounts.intuit.com/app/account-manager/myData) to a .csv file format. It locates Mint transactions within the download provided by Intuit and converts the transactions to a format that other software including  finance tools like Monarch and Simplifi can utilize to import data.

## Steps for Getting Mint Data
1. Request data from [Intuit's Data & Privacy page](https://accounts.intuit.com/app/account-manager/myData). 
    - Intuit acknowledges receipt of the request and gives a processing time that could take 15 days. (It is typically 2 or 3 days.)
    - Intuit will notify the account holder when their data is ready. 
    - Once ready, download the data. The download should be available for a few weeks on Intuit.
2. Node.js is needed to run the script. Download [Node.js LTS](https://nodejs.org/en). 
3. Open a command prompt and navigate to where the Intuit data is.
    - Locate directory SharedData/FinancialData. You should see a file named accounts_users_...txt and other files named transactions_users_...txt.
4. Copy file [mintJsonToCsv.mjs](https://github.com/RandomEngy/MintJsonToCsv/tree/master) to the SharedData/FinancialData folder.
5. In the command prompt, run `node mintJsonToCsv.mjs`
6. The data file transactions.csv will be in the directory SharedData/FinancialData  

This currently does not convert labels/tags. I didn't use them and I couldn't find where they might be on the exported data. If you can supply me with a source JSON file or tell me what property they are on, I can add it.