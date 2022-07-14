import type { ActorMethod } from '@dfinity/agent';
import type { Principal } from '@dfinity/principal';

export type Result = { Ok: bigint } | { Err: string };
export type Result_1 = { Ok: null } | { Err: string };
export interface _SERVICE {
  add_white_list_bulk: ActorMethod<[Array<[string, bigint]>], Result>;
  get_err_log: ActorMethod<[], Array<string>>;
  get_owner: ActorMethod<[], Array<Principal>>;
  get_success_log: ActorMethod<[], Array<string>>;
  get_white_list: ActorMethod<[], Array<[string, bigint]>>;
  try_exchange: ActorMethod<[], Result_1>;
}
