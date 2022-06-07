# NnsDao Service

## Install

### Install from Github

```sh
# Use default ssh account
npm i git@github.com:NnsDao/ActorService.git

# Or use another ssh account
npm i git+ssh://xxxx:NnsDao/ActorService.git
```

### Install from npm

Config registry

```txt
# .npmrc
@nnsdao:registry=https://registry.npmjs.org/
```

```sh
npm install @nnsdao/actorservice
```

### Install from Github packages

Config registry

```txt
# .npmrc
@nnsdao:registry=https://npm.pkg.github.com
```

```sh
npm install @nnsdao/actorservice
```

## Usage

```js
// import IDL
// import { idlFactory as proxyIDL } from 'actorservice/xxxx/index';
import { idlFactory as proxyIDL } from '@nnsdao/actorservice/market/index';

// import Service
// import {xxx as xxx } from 'actorservice/xxx/xxx.did'
import { _SERVICE as proxyActor } from '@nnsdao/actorservice/market/market.did';
```

## Typescript warning

If you got this warning

![path warning](./static/path-alias.jpg)

Config Path alias at `tsconfig.json`

```json
{
  "compilerOptions": {
    // xxx
    "paths": {
      // xxx
      "@nnsdao/actorservice/*": ["./node_modules/@nnsdao/actorservice/src/*"]
    }
  }
}
```
