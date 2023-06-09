# Contract

All Contracts In Here

## contract addresses

### mainnet

## how to develop and test

### Principle of development

#### TDD(Test-Driven Development)

The development process must strictly follow the principle of test-driven development, write test cases first, and then write the function implementation.

#### Code submission requires all test cases to pass

#### Incremental design

### Actual engineering development

#### Update With npm

The project structure is as follows

```shell
contracts/
├── contracts          --- Contract source code directory, mainly store *.sol contract files
│   ├── HelloWorld.sol
│   └── ...
├── scripts            --- js script directory, mainly store deployment scripts.
│   ├── HelloWorld-deploy.js
│   └── ...
├── test               --- Contract unit test directory
│   ├── HelloWorld-test.js
│   └── ...
├── hardhat.config.js  --- hardhat configuration file
├── package.json
├── .env               --- Environment variable file (need to be created manually)
└── ...
```

## - Automated testing

Running Test Locally (Recommend)

```shell
npx hardhat test
```

```shell
npx hardhat test --grep one
```

Running Test On Polygon Testnet

```shell
npx hardhat test --network mumbai
```

## Deployment

### Deploy contract to testnet or mainnet

```shell
npx hardhat run scripts/HelloWorld-deploy.ts --network mumbai
```

```shell
npx hardhat run --network polygon_testnet scripts/HelloWorld-deploy.ts
npx hardhat run --network polygon_testnet filePath
```

### Compile contract ABI

```shell
npm run compile
```

#### Generate contracts to the corresponding directory structure

````shell

```bash
contracts/
├── abi/
│   └── contracts/
│       ├── HelloWorld.sol/
│       │   ├── HelloWorld.json  ---abi description file
│       │   └── HelloWorld.ts    ---abi Typescript file
│       └── OtherXXX.sol/
│           ├── OtherXXX.json
│           └── OtherXXX.ts
│   └── contracts_sui/
│       └── core/
│           └── OtherXXX.sol
│       └── token/
│           └── SuiBFBToken.sol
└── ...
````

Copy the files in the `abi/` directory to the corresponding project for use

About the `abi/` directory, you can also use the `npm run compile` command to generate the `abi/` directory, and then copy the files in the `abi/` directory to the corresponding project for use.
