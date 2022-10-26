import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type BearerResponse = { Ok: string } | { Err: CommonError };
export type CommonError = { InvalidToken: string } | { Other: string };
export type RejectionCode =
  | { NoError: null }
  | { CanisterError: null }
  | { SysTransient: null }
  | { DestinationInvalid: null }
  | { Unknown: null }
  | { SysFatal: null }
  | { CanisterReject: null };
export type Result = { Ok: [boolean] } | { Err: [RejectionCode, string] };
export type Result_1 =
  | { Ok: [BearerResponse] }
  | { Err: [RejectionCode, string] };
export interface Staking {
  weight: Weight;
  staking_list: Array<[Principal, Array<StakingItem>]>;
  summary: Summary;
  nft_list: Array<number>;
  nri_limit: number;
}
export interface StakingItem {
  weight: number;
  earnings: bigint;
  number: [] | [number];
  timestamp: bigint;
}
export interface Summary {
  describe: string;
  total: bigint;
  total_weight: number;
  cycle: number;
  nri_limit: number;
}
export interface Weight {
  fifth: [number, number];
  first: [number, number];
  third: [number, number];
  second: [number, number];
  fourth: [number, number];
}
export interface _SERVICE {
  backup_all_data: ActorMethod<[], Staking>;
  check_nri: ActorMethod<[number], boolean>;
  get_staking: ActorMethod<[], [] | [Array<StakingItem>]>;
  get_staking_all: ActorMethod<[], Array<[Principal, Array<StakingItem>]>>;
  get_summary: ActorMethod<[], Summary>;
  set_summary: ActorMethod<[Summary], undefined>;
  set_weight: ActorMethod<[Weight], undefined>;
  staking_back: ActorMethod<[number], Result>;
  staking_up: ActorMethod<[number], Result_1>;
}
