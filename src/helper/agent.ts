import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as getCandidIDL } from '../get-candid';
import { DIP20Actor, DIP20IDL, EXTActor, EXTIDL } from './constants';

import storage from './storage';

//  online IC  host
const onlineHost = 'https://ic0.app';
export let agent = new HttpAgent({ host: onlineHost });
export const replaceAgent = (agent_: HttpAgent) => (agent = agent_);

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

export async function getCandid(cid: string) {
  const actor = Actor.createActor(getCandidIDL, {
    agent: anonymousAgent,
    canisterId: cid,
  });
  return await actor.__get_candid_interface_tmp_hack();
}

/**
 * DIP20 actor
 */
export async function getDIP20Actor(needAuth: boolean = false, cid: string) {
  return getActor<DIP20Actor>({
    needAuth,
    idl: DIP20IDL,
    cid,
  });
}

/**
 * EXT actor
 */
export async function getEXTActor(needAuth: boolean = false, cid: string) {
  return getActor<EXTActor>({
    needAuth,
    idl: EXTIDL,
    cid,
  });
}

// Type
export interface getActorProps {
  needAuth?: boolean;
  idl: (...arg: any[]) => any;
  cid: string;
}
