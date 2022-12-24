import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface CanisterStatusResponse {
  status: Status;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettings;
  module_hash: [] | [Uint8Array];
}
export type ControllerAction = { add: Principal } | { remove: Principal };
export interface CreateDaoOptions {
  memo: bigint;
  block_height: bigint;
}
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
export type Result =
  | { Ok: CanisterStatusResponse }
  | { Err: [RejectionCode, string] };
export type Result_1 = { Ok: string } | { Err: string };
export type Result_2 = { Ok: TransactionItem } | { Err: string };
export type Result_3 = { Ok: null } | { Err: [RejectionCode, string] };
export type Result_4 = { Ok: null } | { Err: string };
export type Status = { stopped: null } | { stopping: null } | { running: null };
export interface TransactionItem {
  to: string;
  status: number;
  from: string;
  memo: bigint;
  amount: bigint;
}
export interface _SERVICE {
  add_dao: ActorMethod<[string], Array<string>>;
  add_owner: ActorMethod<[], Array<Principal>>;
  canister_status: ActorMethod<[], Result>;
  create_dao: ActorMethod<[CreateDaoOptions], Result_1>;
  dao_list: ActorMethod<[], Array<string>>;
  get_owner: ActorMethod<[], Array<Principal>>;
  get_pay_info: ActorMethod<[], Result_2>;
  reinstall_canister: ActorMethod<[], Result_3>;
  transaction_log: ActorMethod<[], Array<TransactionItem>>;
  update_dao_controller: ActorMethod<[ControllerAction], Result_4>;
  upgrade_canister: ActorMethod<[], Result_3>;
}
