import { Principal } from '@dfinity/principal';
import { toHexString } from './agent';

export function validPrincipalId(principalId: string) {
  try {
    principalId === Principal.fromText(principalId).toString();
    return true;
  } catch (e) {
    return false;
  }
}

export function validAccountId(accountId: string) {
  return accountId.length === 64 && /^[a-zA-Z0-9]+$/.test(accountId);
}

function to32bits(num: number) {
  let b = new ArrayBuffer(4);
  new DataView(b).setUint32(0, num);
  return Array.from(new Uint8Array(b));
}

function from32bits(arr: number[]) {
  let value = 0;
  for (let i = 0; i < 4; i++) {
    value = (value << 8) | arr[i];
  }
  return value;
}

function canisterIdToTokenId(principal: string, index: number) {
  const padding = Buffer.from('\x0Atid');
  const array = new Uint8Array([...padding, ...Principal.fromText(principal).toUint8Array(), ...to32bits(index)]);
  return Principal.fromUint8Array(array).toText();
}
export function tokenIdToCanisterId(tokenId: string) {
  let p = [...Principal.fromText(tokenId).toUint8Array()];
  let padding = p.splice(0, 4);

  if (toHexString(padding) !== toHexString(Buffer.from('\x0Atid'))) {
    return {
      index: 0,
      canister: tokenId,
      token: canisterIdToTokenId(tokenId, 0),
    };
  } else {
    return {
      index: from32bits(p.splice(-4)),
      canister: Principal.fromUint8Array(p as unknown as Uint8Array).toText(),
      token: tokenId,
    };
  }
}
