import type { Principal } from '@dfinity/principal';
export interface CanisterStatusResponse {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettings;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Array<number>];
}
export type CanisterStatusType = { stopped: null } | { stopping: null } | { running: null };
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
export type Result = { Ok: null } | { Err: [RejectionCode, string] };
export type Result_1 = { Ok: [CanisterStatusResponse] } | { Err: [RejectionCode, string] };
export default interface _SERVICE {
  canister_start: (arg_0: Principal) => Promise<Result>;
  canister_stop: (arg_0: Principal) => Promise<Result>;
  create_podcast_canister: () => Promise<Result>;
  deposit: (arg_0: Principal, arg_1: bigint) => Promise<Result>;
  get_address: () => Promise<string>;
  get_canister_status: (arg_0: Principal) => Promise<Result_1>;
  get_podcast_canister: () => Promise<Array<Principal>>;
  need_upgrade: (arg_0: Principal) => Promise<boolean>;
  notify_upgrade: () => Promise<undefined>;
  update_canister_set: (
    arg_0: Principal,
    arg_1: [] | [bigint],
    arg_2: [] | [bigint],
    arg_3: [] | [bigint]
  ) => Promise<Result>;
  upgrade_podcast: (arg_0: Principal) => Promise<Result>;
}
