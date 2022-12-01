import { AccountIdentifier, LedgerCanister, principalToAccountIdentifier } from '@dfinity/nns';
import { Principal } from '@dfinity/principal';
import { agent, getDIP20Actor, getEXTActor } from './agent';
import { tokenType } from './constants';
import { plugLogin } from './plug';
import storage from './storage';
import { getTokenItemInfo } from './utils';

/**
 *
 * @param amount must be e8s format
 * @param receiver
 * @param memo
 * @returns
 */
export async function payWithICP(amount: bigint, receiver: string, memo?: bigint): Promise<number> {
  // const amount_e8s = BigInt(amount * 1e8);
  let res: any = 0;
  const loginType = storage.get('loginType');
  if (loginType == 'plug') {
    await plugLogin([]);
    const params: any = {
      to: receiver,
      amount: Number(amount),
    };
    if (memo) {
      params.opts = {
        memo: Number(memo),
      };
    }
    console.log('start transfer', params);
    // @ts-ignore
    res = await window.ic?.plug?.requestTransfer(params);
    res = res.height || 0;
  } else {
    const ledger = LedgerCanister.create({ agent });
    const params: any = {
      to: AccountIdentifier.fromHex(receiver),
      amount,
    };
    if (memo) {
      params.memo = memo;
    }
    res = await ledger.transfer(params);
    res = Number(res);
  }
  return res as number;
}

/**
 *
 * @param accountID string
 * @returns bigint
 */
export async function getICPBalance(accountID: string) {
  const ledger = LedgerCanister.create({ agent });

  const balance = await ledger.accountBalance({
    accountIdentifier: AccountIdentifier.fromHex(accountID),
  });
  console.log('ICP balance', balance);
  return balance;
}

/**
 * support DIP20 EXT ICP
 * @param token string
 * @param principal Principal
 * @returns bigint
 */
export async function getTokenBalance(token: tokenType, principal: Principal): Promise<bigint> {
  const accountID = principalToAccountIdentifier(principal);
  const standard = getTokenItemInfo(token);
  if (standard?.standard === 'ICP') {
    return getICPBalance(accountID);
  }
  if (standard?.standard == 'EXT') {
    const actor = await getEXTActor(true, standard.cid ?? '');
    const balance = await actor.balance({
      token: token as string,
      user: {
        address: accountID,
      },
    });
    if ('ok' in balance) {
      return balance.ok;
    }
    return BigInt(0);
  }
  if (standard?.standard == 'DIP20') {
    const actor = await getDIP20Actor(true, standard.cid ?? '');
    const balance = await actor.balanceOf(principal);
    return balance;
  }
  return BigInt(0);
}

/**
 *
 *
 * @param token tokenType
 * @param amount  bigint
 * @param receiver_principal
 * @param from_principal
 * @param memo
 * @returns
 */
export async function payToken(
  token: tokenType,
  amount: bigint,
  receiver_principal: Principal,
  from_principal?: Principal,
  memo?: bigint
) {
  const standard = getTokenItemInfo(token);
  const receiver_accountID = principalToAccountIdentifier(receiver_principal);
  if (standard?.standard === 'ICP') {
    return payWithICP(amount, receiver_accountID, memo);
  }
  // frontend transfer
  if (standard?.standard == 'EXT') {
    const actor = await getEXTActor(true, standard.cid ?? '');
    const res = await actor.transfer({
      to: {
        address: receiver_accountID,
      },
      token,
      notify: false,
      from: {
        // @ts-ignore
        principal: from_principal,
      },
      memo: [],
      subaccount: [],
      amount,
    });
    if ('ok' in res) {
      return res.ok;
    }
    console.log('transfer', res);

    return null;
  }
  // backend transfer,here need approve
  if (standard?.standard == 'DIP20') {
    const actor = await getDIP20Actor(true, standard.cid ?? '');
    const res = await actor.approve(receiver_principal as Principal, amount);
    if ('Ok' in res) {
      return res.Ok;
    }
    console.log('approve res', res);

    return null;
  }
}
