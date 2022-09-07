import { AccountIdentifier, ICP, LedgerCanister } from '@dfinity/nns';
import { agent } from './agent';
import { plugLogin } from './plug';
import storage from './storage';

export async function payWithICP(amount: number, receiver: string, memo?: bigint): Promise<number> {
  // const amount_e8s = BigInt(amount * 1e8);
  let res: any = 0;
  const loginType = storage.get('loginType');
  if (loginType == 'plug') {
    await plugLogin([]);
    const params: any = {
      to: receiver,
      amount,
    };
    if (memo) {
      params.opts = {
        memo,
      };
    }
    // @ts-ignore
    res = await window.ic?.plug?.requestTransfer(params);
    res = res.height || 0;
  } else {
    const ledger = LedgerCanister.create({ agent });
    const params: any = {
      to: AccountIdentifier.fromHex(receiver),
      amount: ICP.fromE8s(BigInt(amount * 1e8)),
    };
    if (memo) {
      params.memo = memo;
    }
    res = await ledger.transfer(params);
    res = Number(res);
  }
  return res as number;
}
