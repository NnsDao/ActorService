import { StoicIdentity } from 'ic-stoic-identity';
import { agent } from './agent';
interface loginRes {
  principalId: string;
  accountId: string;
}
export async function stoicLogin(): Promise<loginRes | null> {
  return StoicIdentity.load().then(async (identity: any) => {
    if (identity !== false) {
      //ID is a already connected wallet!
      // return identity.getPrincipal().toText();
      // return (await $agent.getPrincipal()).toText();
    } else {
      //No existing connection, lets make one!
      identity = await StoicIdentity.connect();
      // return identity.getPrincipal().toText();
    }
    // update auth agent
    agent.replaceIdentity(identity);
    return identity
      .accounts()
      .then((res: string) => {
        const addressList = JSON.parse(res);
        console.log('stoic address', addressList, 'identity', identity.getPrincipal().toText());
        return {
          agent: null,
          principalId: identity.getPrincipal().toText(),
          accountId: addressList[0].address,
        };
      })
      .catch((err: any) => {
        console.error('stoic accounts', err);
        return null;
      });
  });
}

export async function stoicLogout() {
  //Disconnect after
  await StoicIdentity.disconnect();
}
