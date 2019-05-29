# borker-server  - UNRELEASED

Censorship-resistant news sharing on Dogecoin.

## Installation Instructions:

### Install Node.js if not installed
https://github.com/nodesource/distributions/blob/master/README.md

* confirm installation with:

```node -v```

```npm -v```

### Install typescript if not installed
```npm install -g typescript```

### Clone the repository
```git clone https://github.com/MattDHill/borker-server.git```

### Go into the directory
```cd borker-server```

### Copy borkerconfig.json and ormconfig.json from samples
```cp borkerconfig-sample.json borkerconfig.json```

```cp ormconfig-sample.json ormconfig.json```

### Edit borkerconfig.json to contain your own Dogecoin values and starting block preference
If you are connecting to a remote Dogecoin node, make sure the node is configured to allow your local IP in dogecoin.conf

```rpcallowip=```

### Install packages
```npm install```

### Build Borker
```npm run build```

### Start the server and Bork on
```npm run start```

## * To run tests *
```npm run test```
