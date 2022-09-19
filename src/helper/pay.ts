import { AccountIdentifier, ICP, LedgerCanister } from '@dfinity/nns';
import { Principal } from '@dfinity/principal';
import { agent, getNDPActor } from './agent';
import { plugLogin } from './plug';
import storage from './storage';
import { principalIdToAccountId } from './utils';

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
      amount: ICP.fromE8s(amount),
    };
    if (memo) {
      params.memo = memo;
    }
    res = await ledger.transfer(params);
    res = Number(res);
  }
  return res as number;
}

export async function payWithNDP() {
  //
  throw new Error('Unimplemented');
}

/**
 *
 * @param accountId
 * @returns es8 bigint
 */
export async function getBalanceOfICP(principal: Principal): Promise<bigint> {
  const accountId = principalIdToAccountId(principal.toText());
  const data = {
    account_identifier: { address: accountId },
    network_identifier: {
      blockchain: 'Internet Computer',
      network: '00000000000000020101',
    },
  };
  const res = await fetch('https://rosetta-api.internetcomputer.org/account/balance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json());

  return res.balances?.[0]?.value;
}

// es8 bigint type
export async function getBalanceOfNDP(principal: Principal) {
  const actor = await getNDPActor(true);
  return actor.balanceOf(principal);
}
