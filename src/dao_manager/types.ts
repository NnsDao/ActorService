import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type ControllerAction =
  | { add: Principal }
  | { remove: Principal }
  | { clear: null };
export interface CreateDaoInfo {
  option: [] | [Array<[string, string]>];
  name: string;
  tags: Array<string>;
  intro: string;
  avatar: string;
  poster: string;
}
export interface DaoInfo {
  id: bigint;
  controller: Array<Principal>;
  status: DaoStatusCode;
  owner: Principal;
  canister_id: Principal;
  dao_type: string;
}
export type DaoStatusCode = { Closed: null } | { Normal: null };
export type Result = { Ok: null } | { Err: string };
export interface _SERVICE {
  add_dao: ActorMethod<[bigint, Principal], Result>;
  create_dao: ActorMethod<[CreateDaoInfo], Result>;
  dao_list: ActorMethod<[], Array<DaoInfo>>;
  get_owner: ActorMethod<[], Array<Principal>>;
  greet: ActorMethod<[string], string>;
  update_dao_controller: ActorMethod<[bigint, ControllerAction], Result>;
}
