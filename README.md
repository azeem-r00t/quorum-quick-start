# quorum-quick-start
Quickstart project demonstrating private smart contract execution on a quorum network. 

The 'SimpleStorage' contract is used as a starter sample smart contract used by many examples out there. In this quickstart, we deploy the 'SimpleStorage' contract as a *private* smart contract to store a shared secret between two parties. 

To demonstrate both how the contract works as well as a sample starter app that show cases interaction with a ethereum-type blockchain using the `web3` APIs and `truffle` framework

This quickstart also has as API server and a front-end client. The API server exposes a domain and contract-specific API for the front-end and utilizes the `truffle` framework and the `web3` api to interact with the smart contract on the blockchain. 

The UI simply shows the state of the *private* storage for the smart contract that is only visible to specific nodes that are parties to the contract. It also allows one to update the contract and see the update visible to only parties to the contract. 

## Before you begin

### Quorum
Clone [quorum](https://github.com/azeem-r00t/quorum) and follow the instructions in [build/docker/tests/README.md](https://github.com/azeem-r00t/quorum/tree/master/build/docker/tests/README.md) to create a five-node quorum network. 

After setting up the five-node quorum network, you will now need to compile and install the smart contract on that network. During the quorum docker setup, you would have run a `setup.sh` script. That scripts outputs the public keys for each node. You will see different values when you run it but they will look similar to the following: 

```
...
[4] Creating Quorum keys and finishing configuration.
Node 1 public key: gDleDe+89MwtPRCuRlel8+5B/neRQfQY8FiMcPY/nV0=
Node 2 public key: xHMtUQBVbxncjndN2Oxxds64pZfG0Vymz4rTrng6VFw=
Node 3 public key: +eDhsUucrv88eDfMnZVJb3VgPEuCujHZiwqOulhk1Xc=
Node 4 public key: LKguxT5/wwtBapkobjsa2EnRc5jK/XoZUEonF0ZwBXc=
Node 5 public key: VDtzPHon2s20cvjLMLJguPtyReMnEaNotDtCzJGRSVI=
```

You can pick any two nodes to setup the private contract. By setting up a private contract between any two nodes, you create a privately maintained state between these nodes that is not visible to the other nodes. This quickstart has a UI that showcases this feature of quorum (that is different from the public blockchain and is of significant value in a private blockchain setup where all parties can't be privvy to all the details of all transactions). 

### Development tools
We use the [Truffle Suite](http://truffleframework.com/) for compiling contracts and deploying the bytecode to the quorum network. You can install the truffle suite using the following command: 

```npm install -g truffle```

We also use the [`concurrently`]() to run the backend-server (that has the APIs) and the front-end client. Please use the following command to install concurrently: 

```npm install -g concurrenlty```

## Getting Started 

### Install dependencies 
We have two sets of dependencies that we need to install (one for the api server and one for the reactjs ui).

From the top-level directory of the project, issue the following commands: 

```
npm install
cd client && npm install
```

### Setting up the contracts
We have to do some manual work to set up the contracts so they are deployed correctly. The code in this project refers the public keys for the private network I had setup. We assume that the default node that we use to deploy the contract will be `Node 1`. So, `Node 1` will always be a party to the contract. You can pick one of the other nodes as the second party and copy that public key (from your output - not from what is listed above). 

Update `toKeys` in the configuration file `config/default.json` to point to your own public key for the second party to the private smart contract. Like mentioned before, we will be deploying the contract using ``Node 1`` so you should choose one of the other nodes as the second party. 

After you have updated the public key, run the following commands to compile and deploy the contract: 

```
npm run build:contracts
npm run contracts:migrate
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

Now, your private contract is on the blockchain and its state is encrypted and only available to the parties that were identified earlier (node 1 and the second node that you picked earlier). 

### Let's see how it works

This is the easy part now. Run the following at the top-level directory of the project: 

```npm start```

This will start both the API server and the development server for the UI. It should open up your browser to ```localhost:3000```. 

## Open Issues

I'm not done yet. There are several improvements that can be made to this project to showcase and demonstrate the value of a private blockchain deployment that enables privacy of transactions. I have a list of open issues that I have opened that I'll continue to work on in the future. 

## Contributing 

Please feel free to fork this and improve it. You are also welcome to pick and work on any of the issues that are on my radar already.  
