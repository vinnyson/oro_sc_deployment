require('dotenv').config()
import { TezosToolkit } from '@taquito/taquito';
import {InMemorySigner, importKey } from '@taquito/signer';
import codeJson from './Contracts/XTZSILVER/code.js';
import storageJson from './Contracts/XTZSILVER/storage.js';

const tezos = new TezosToolkit(process.env.TESTNET);

tezos.setProvider({
    signer: new InMemorySigner(process.env.PRIVATEKEY),
});

console.log(`start oringation process`);
tezos.contract.originate({
    code: codeJson,
    init: storageJson,
})
.then((originationOp) => {
    console.log(`orginating Contract`);
    console.log(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);
    return originationOp.contract();
})
.then((contract) => {
    console.log(`Origination completed.`);
})
.catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));