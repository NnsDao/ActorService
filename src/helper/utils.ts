import { Principal } from '@dfinity/principal';
import { getCrc32 } from '@dfinity/principal/lib/esm/utils/getCrc';
import { sha224 } from '@dfinity/principal/lib/esm/utils/sha224';
import { Buffer } from 'buffer';

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

export const principalIdToAccountId = (p: string, s = 0) => {
  const padding = Buffer.from('\x0Aaccount-id');
  const array = new Uint8Array([...padding, ...Principal.fromText(p).toUint8Array(), ...getSubAccountArray(s)]);
  const hash = sha224(array);
  const checksum = to32bits(getCrc32(hash));
  const array2 = new Uint8Array([...checksum, ...hash]);
  // @ts-ignore
  return toHexString(array2);
};

export const getSubAccountArray = (s: number = 0) => {
  if (Array.isArray(s)) {
    return s.concat(Array(32 - s.length).fill(0));
  } else {
    //32 bit number only
    return Array(28)
      .fill(0)
      .concat(to32bits(s ? s : 0));
  }
};

export const toHexString = (byteArray: any[]) => {
  return Array.from(byteArray, function (byte: any) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
};

export const to32bits = (num: any) => {
  const b = new ArrayBuffer(4);
  new DataView(b).setUint32(0, num);
  return Array.from(new Uint8Array(b));
};
