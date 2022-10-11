import { AccountIdentifier, principalToAccountIdentifier } from '@dfinity/nns';
import { Principal } from '@dfinity/principal';
import { DIP20IDL, EXTIDL, supportTokenItem, supportTokensList, tokenStandardType, tokenType } from './constants';

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

/**
 *
 * @param principalID  string
 * @returns  accountID string
 */
export const principalIdToAccountId = (principalID: string) => {
  return principalToAccountIdentifier(Principal.fromText(principalID));
};

export const principalIdToAccountIdentifier = (principalID: string, subAccount?: any) => {
  return AccountIdentifier.fromPrincipal({ principal: Principal.fromText(principalID), subAccount });
};

/**
 * transform Price type
 */
type PriceObj = {
  [key in tokenType]: bigint;
};
export function getNFTPrice(price: bigint | PriceObj): [tokenType, bigint] {
  if (typeof price === 'object') {
    return [Object.keys(price)[0] as tokenType, Object.values(price)[0]];
  }
  return ['ICP', price];
}

export function getStandardIDL(standard: tokenStandardType) {
  switch (standard) {
    case 'DIP20':
      return DIP20IDL;
    case 'EXT':
      return EXTIDL;
    case 'ICP':
      throw new Error('Umimplemented icp actor');
  }
}

export function getTokenItemInfo(token: tokenType) {
  return supportTokensList.find(item => item.token == token) as supportTokenItem;
}
export function thousandsCommaDivide(num: number) {
  return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function thousandsToK(num: number): string {
  return num >= 1e3 ? (num / 1e3).toFixed(2) + 'k' : num + '';
}
