# Deployment of XTZGold & XTZSilver smart contracts

XTZGold & XTZSilver are tokenised assets backed by physical gold and silver by [Oropocket](https://oropocket.com/) on the Tezos Platform. Written based on [FA1.2](https://gitlab.com/tzip/tzip/blob/master/proposals/tzip-7/tzip-7.md) powered by [SmartPy](https://smartpy.io/).

## Deploying on SmartPy Online IDE

1. Head to [Wallet Tab](https://smartpy.io/wallet.html) > Faucet Accounts > Faucet Importer to create a Tezos test account (Optional if you are not accessing your wallet through temple and beacon)

2. Copy the contents from the Py file onto the [IDE](https://smartpy.io/ide)

3. Edit the admin account on the test scenarios to your desired tz1 account

    > admin = sp.address("tz1...")

4. Press `Run` Code Button

5. Select `Deploy Michelson Contract` and press `Deploy Michelson Contract`

6. Select Network `MAINNET` being the mainnet and `EDONET` being our latest testnet.

7. Deploy Contract

8. You can use the [explorer](https://smartpy.io/explorer.html) to execute operations.

## Deploying Locally

1. After compiling on online IDE, Copy and paste the code and storage onto seperate js file.

2. Change the env file's PRIVATEKEY & switch between networks.

3. Edit the admin account on `Contracts/XTZGOLD/storage.js` & `Contracts\XTZSILVER/storage.js`.

4. run `node --require @babel/register index.js`
