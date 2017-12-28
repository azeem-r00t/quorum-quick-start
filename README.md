# quorum-quick-start
Quickstart project demonstrating private smart contract execution on a quorum network. 

The *SimpleStorage* contract is used as a sample smart-contract by several examples out there. In this quickstart, we deploy the *SimpleStorage* contract as a *private* smart contract to store a shared secret between two parties. 

We use a web app to demonstrate how the contract works.

This quickstart has as API server and a front-end client. The API server exposes a domain and contract-specific API for the front-end and utilizes the `truffle` framework and the `web3` api to interact with the smart contract on the blockchain. 

The UI simply shows the state of the *private* storage for the smart contract that is only visible to specific nodes that are parties to the contract. It also allows the user to update the contract and verify that the update is visible to only parties to the contract. 

## Before you begin

### Quorum
Clone [quorum](https://github.com/azeem-r00t/quorum) and follow the instructions in [build/docker/tests/README.md](https://github.com/azeem-r00t/quorum/tree/master/build/docker/tests/README.md) to create a five-node quorum network. 

After setting up the five-node quorum network, you will need to get ready to deploy a private smart contract. During the quorum docker setup, you would have run a `setup.sh` script. That scripts outputs the public keys for each node. You will see different values on your machine but they will look similar to the following: 

```
...
[4] Creating Quorum keys and finishing configuration.
Node 1 public key: gDleDe+89MwtPRCuRlel8+5B/neRQfQY8FiMcPY/nV0=
Node 2 public key: xHMtUQBVbxncjndN2Oxxds64pZfG0Vymz4rTrng6VFw=
Node 3 public key: +eDhsUucrv88eDfMnZVJb3VgPEuCujHZiwqOulhk1Xc=
Node 4 public key: LKguxT5/wwtBapkobjsa2EnRc5jK/XoZUEonF0ZwBXc=
Node 5 public key: VDtzPHon2s20cvjLMLJguPtyReMnEaNotDtCzJGRSVI=
```

You can pick any two nodes to setup the private contract (Node 1 should be one of the nodes you pick because the rest of the instructions assume Node 1 is one of the parties to the contract). 

By setting up a private contract between any two nodes, you create a privately maintained state between these nodes that is not visible to the other nodes. This quickstart has a UI that showcases this feature of quorum (that is different from the public blockchain and is of significant value in a private blockchain setup where all parties can't be privvy to all the details of all transactions). 

### Development tools
We use the [Truffle Suite](http://truffleframework.com/) for compiling contracts and deploying the bytecode to the quorum network. You can install the truffle suite using the following command: 

```npm install -g truffle```

We also use the [`concurrently`]() to run the backend-server (that has the APIs) and the front-end client. Please use the following command to install concurrently: 

```npm install -g concurrently```

## Getting Started 

### Install dependencies 
We have two sets of dependencies that we need to install (one for the api server and one for the reactjs ui).

From the top-level directory of the project, issue the following commands: 

```
npm install
cd client && npm install && cd ..
```

### Setting up the contracts
We have to do some manual work to set up the contracts so they are deployed correctly. We assume that the default node that we use to deploy the contract will be `Node 1`. So, `Node 1` will always be a party to the contract. You can pick one of the other nodes as the second party and copy that public key (from your output - not from what is listed above). 

Update `toKeys` in the configuration file `config/default.json` to point to the public key of the second party to the private smart contract. Like mentioned before, we will be deploying the contract using ``Node 1`` so you should choose one of the other nodes as the second party. 

After you have updated the public key, run the following commands to compile and deploy the contract: 

```
npm run build:contracts
NODE_CONFIG_DIR=../config npm run contracts:migrate
```

You should see a something similar to the following (of course, your hashes will be different). 

```
Running migration: 2_deploy_simplestorage.js
  Deploying SimpleStorage...
  ... 0x449941aa641adac785d85bd72883b785f25506ef7ede2aa8f8b04c1bd855b334
  SimpleStorage: 0xde2b68e2ab21c337ce55c26b274eb229158c837d
Saving successful migration to network...
  ... 0xe876de087101bee0168fa1459c6d21ecb30d5f30f4e0eaef4015efeb0b393cc4
Saving artifacts...
```

Now, your private contract is on the blockchain and its storage is encrypted and only available to the parties that were identified earlier (node 1 and the second node that you picked). 

### Let's see how it works

This is the easy part now. Run the following at the top-level directory of the project: 

```npm start```

This will start both the API server and the development server for the UI. It should open up your browser to ```localhost:3000```. 

## UI 

The UI shows the storage of the five nodes and you will notice that only two (node 1 and whatever other node you picked earlier) show the storage value. You can utilize the console to update this shared secret and watch it updated in the UI. In the backend, we are issuing a request to the blockchain to view the stored secret at all nodes but we are only getting back the value on the nodes that are party to the contract. 

In a distributed app, these may be two banks or a set of banks that need to restrict access to transactions to themselves and a third-party. Another set of banks could execute another contract with the same third-party. The third-party would have access to all data but the two sets of banks can't see each other's data. 

We are sure you can think of other ways this will be useful as well (eg: voting scenarios, supply chain scenarios where trade secrets are important). 

## Open Issues

I'm not done yet. There are several improvements that can be made to this project to showcase and demonstrate the value of a private blockchain deployment that enables privacy of transactions. I have a list of open issues that I have opened that I'll continue to work on in the future. 

## Issues that you may run into 

1. Depending on how much memory or CPU you have assigned to your docker installation, the quorum network may stall. If this happens, you will notice in the geth log that the ethhas verification cache is being regenerated at an extremely slow pace and both the raft protocol and quorum node peers will keep dropping and reconnecting. I haven't found an easy way to resolve this other than memory and CPU. You may have better luck. 

2. To debug any issues with geth, you can log into one of the docker containers, attach to geth over ipc, and then utilize the admin and other APIs to verify various aspects of this. Please refer to ethereum/go-ethereum documentation on further details. 

3. If you modify the ports that the quorum network listens to, then this project will stop working. There is an underlying assumption about the ports. 

## Contributing 

Please feel free to fork this and improve it. You are also welcome to pick and work on any of the issues that are on my radar already.  
