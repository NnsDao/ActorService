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
export interface CreateDaoOptions {
  memo: bigint;
  tags: Array<string>;
  block_height: bigint;
}
export interface DaoInfo {
  controller: Array<Principal>;
  status: DaoStatusCode;
  owner: Principal;
  create_at: bigint;
  canister_id: Principal;
}
export type DaoStatusCode = { Stopped: null } | { Active: null };
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
export type Result_2 = { Ok: TransactionItem } | { Err: string };
export type Result_3 = { Ok: null } | { Err: [RejectionCode, string] };
export type Status = { stopped: null } | { stopping: null } | { running: null };
export interface TransactionItem {
  to: string;
  status: number;
  from: string;
  memo: bigint;
  amount: bigint;
}
export interface _SERVICE {
  add_dao: ActorMethod<[string], Result>;
  create_dao: ActorMethod<[CreateDaoOptions], Result>;
  dao_list: ActorMethod<[], Array<DaoInfo>>;
  dao_status: ActorMethod<[string], Result_1>;
  get_owner: ActorMethod<[], Array<Principal>>;
  get_pay_info: ActorMethod<[], Result_2>;
  reinstall_canister: ActorMethod<[], Result_3>;
  transaction_log: ActorMethod<[], Array<TransactionItem>>;
  update_dao_controller: ActorMethod<[Principal, ControllerAction], Result>;
  upgrade_canister: ActorMethod<[], Result_3>;
}
