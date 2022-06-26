import { Actor, HttpAgent } from '@dfinity/agent';
import storage from './storage';

export const agent = new HttpAgent();
// anonymous agent can more efficient then auth agent;
export const anonymousAgent: HttpAgent = new HttpAgent();

export async function getActor(props: getActorProps): Promise<typeof Actor> {
  let { cid, idl, needAuth = true } = props;
  const loginType = storage.get('loginType');
  const actor =
    loginType === 'plug'
      ? await window.ic.plug.createActor({ canisterId: cid, interfaceFactory: idl })
      : Promise.resolve(Actor.createActor(idl, { agent: needAuth ? agent : anonymousAgent, canisterId: cid }));
  return actor;
}

export const toHexString = (byteArray: any) => {
  return Array.from(byteArray, function (byte: any) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
};

// Type
interface getActorProps {
  needAuth?: boolean;
  idl?: any;
  cid: string;
}
