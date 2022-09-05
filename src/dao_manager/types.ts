import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface CanisterStatusResponse {
  status: Status;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettings;
  module_hash: [] | [Array<number>];
}
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
  tags: Array<string>;
  canister_id: Principal;
}
export type DaoStatusCode = { Closed: null } | { Normal: null };
export interface DefiniteCanisterSettings {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export type RejectionCode =
  | { NoError: null }
  | { CanisterError: null }
  | { SysTransient: null }
  | { DestinationInvalid: null }
  | { Unknown: null }
  | { SysFatal: null }
  | { CanisterReject: null };
export type Result = { Ok: DaoInfo } | { Err: string };
export type Result_1 =
  | { Ok: CanisterStatusResponse }
  | { Err: [RejectionCode, string] };
export type Status = { stopped: null } | { stopping: null } | { running: null };
export interface _SERVICE {
  add_dao: ActorMethod<[string, CreateDaoInfo], Result>;
  create_dao: ActorMethod<[CreateDaoInfo], Result>;
  dao_list: ActorMethod<[], Array<DaoInfo>>;
  dao_status: ActorMethod<[string], Result_1>;
  get_owner: ActorMethod<[], Array<Principal>>;
  update_dao_controller: ActorMethod<[bigint, ControllerAction], Result>;
}
