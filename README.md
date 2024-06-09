This script converts the Mint data exported from the Intuit Data & Privacy page to a .csv file format. This format is what that the transaction export used when the Mint page was still up, and is what tools like Monarch expect when doing import.

1. Download your data from the [Data & Privacy page](https://accounts.intuit.com/app/account-manager/myData).
2. Download [Node.js LTS](https://nodejs.org/en).
3. Open a command prompt and navigate to SharedData/FinancialData. You should a file named accounts_users_...txt and other files named transactions_users_...txt.
4. Copy mintJsonToCsv.mjs to the folder.
5. Run `node mintJsonToCsv.mjs`

This currently does not convert labels/tags; I didn't use them and I couldn't find where they might be on the exported data. If you can supply me with a source JSON file or tell me what property they are on, I can add it.