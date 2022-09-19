import { Actor, HttpAgent } from '@dfinity/agent';
import NDPActor from '../dip20/types';
import { idlFactory as getCandidIDL } from '../get-candid';
import { ActorMap } from './constants';
import storage from './storage';

//  online IC  host
const onlineHost = 'https://ic0.app';
export const agent = new HttpAgent({ host: onlineHost });

// anonymous agent can more efficient then auth agent;
export const anonymousAgent: HttpAgent = new HttpAgent({ host: onlineHost });

export async function getActor<T>(props: getActorProps): Promise<T> {
  let { cid, idl, needAuth = false } = props;
  const loginType = storage.get('loginType');
  const actor =
    loginType === 'plug'
      ? await window.ic.plug.createActor({ canisterId: cid, interfaceFactory: idl })
      : Promise.resolve(Actor.createActor(idl, { agent: needAuth ? agent : anonymousAgent, canisterId: cid }));
  return actor;
}

export function toHexString(byteArray: any) {
  return Array.from(byteArray, function (byte: any) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
}

export async function getCandid(cid: string) {
  const actor = Actor.createActor(getCandidIDL, {
    agent: anonymousAgent,
    canisterId: cid,
  });
  return await actor.__get_candid_interface_tmp_hack();
}

/**
 * NDP actor
 */
export async function getNDPActor(needAuth: boolean = false) {
  return getActor<NDPActor>({ needAuth, ...ActorMap.ndp });
}

// Type
export interface getActorProps {
  needAuth?: boolean;
  idl: (...arg: any[]) => any;
  cid: string;
}
