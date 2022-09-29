import type { ActorMethod } from '@dfinity/agent';
import type { Principal } from '@dfinity/principal';

export type Operation = { Mint: null } | { Sale: null } | { Transfer: null } | { Offer: null } | { Subdao: null };
export type Price = { Icp: bigint } | { Ndp: bigint };
export interface Record {
  to: string;
  from: string;
  time: bigint;
  canister_id: string;
  token_identifier: string;
  operation: Operation;
  price: Price;
}
export interface _SERVICE {
  get_owner: ActorMethod<[], [] | [Principal]>;
  get_personal_record: ActorMethod<[string], [] | [Array<Record>]>;
  get_record: ActorMethod<[string], [] | [Array<Record>]>;
  get_recorder: ActorMethod<[], Array<Principal>>;
  get_token_record: ActorMethod<[string, string], [] | [Array<Record>]>;
  record_log: ActorMethod<[string, Record], undefined>;
  set_recorder: ActorMethod<[Principal], undefined>;
}
