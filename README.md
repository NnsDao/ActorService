# Nnsdao Kit

## Install

### Install from Github

```sh
npm i https://github.com/NnsDao/nnsdao-kit.git
```

### Install from npm

Config registry

```txt
# .npmrc
@nnsdao:registry=https://registry.npmjs.org/
```

```sh
npm install @nnsdao/nnsdao-kit
```

### Install from Github packages

Config registry

```txt
# .npmrc
@nnsdao:registry=https://npm.pkg.github.com
```

```sh
npm install @nnsdao/nnsdao-kit
```

## Usage

```js
// import IDL
// import { idlFactory as proxyIDL } from 'actorservice/xxxx/index';
import { idlFactory as ProxyIDL } from '@nnsdao/nnsdao-kit/market/index';

// import Service
// import {xxx as xxx } from 'actorservice/xxx/xxx.did'
import { _SERVICE as ProxyActor } from '@nnsdao/nnsdao-kit/market/market.did';
```

## Config Typescript Path Alias

![path warning](./static/path-alias.jpg)

Config Path alias at `tsconfig.json`

```json
{
  "compilerOptions": {
    // xxx
    "paths": {
      // xxx
      "@nnsdao/nnsdao-kit/*": ["./node_modules/@nnsdao/nnsdao-kit/src/*"]
    }
  }
}
```
