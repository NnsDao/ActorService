import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface CanisterLogMessages {
  data: Array<LogMessageData>;
  lastAnalyzedMessageTimeNanos: [] | [bigint];
}
export type CommonError =
  | { InsufficientBalance: null }
  | { InvalidToken: string }
  | { Unauthorized: string }
  | { Other: string };
export interface DisburseService {
  subaccount_num: bigint;
  disbursements_process_lock: boolean;
  failed_disbursements: Array<Disbursement>;
  disbursements_queue: Array<Disbursement>;
}
export interface Disbursement {
  to: Principal;
  to_subaccount: [] | [Array<number>];
  try_num: number;
  from_subaccount: [] | [Array<number>];
  canister: string;
  token_idf: string;
  amount: Price;
}
export interface GetLogMessagesFilter {
  messageRegex: [] | [string];
  messageContains: [] | [string];
}
export interface GetLogMessagesParameters {
  count: number;
  filter: [] | [GetLogMessagesFilter];
  fromTimeNanos: [] | [bigint];
}
export interface Listing {
  seller_subaccount: [] | [Array<number>];
  seller: Principal;
  lock_info: [] | [LockInfo];
  price: Price;
}
export interface LockInfo {
  buyer_subaccount: [] | [Array<number>];
  sold: boolean;
  locked: bigint;
  buyer: Principal;
  transaction_subaccount: Array<number>;
}
export interface LogMessageData {
  timeNanos: bigint;
  message: string;
}
export interface MarketService {
  last_settle_cron: bigint;
  nfts: Array<[string, NFT]>;
  last_list_cron: bigint;
  nft_project_list: Array<[string, Array<[Token, NftInfo]>]>;
}
export interface NFT {
  listings: Array<[number, Listing]>;
  canister_id: string;
  pendding_listings: Array<[number, Listing]>;
  stats: Array<[string, Stats]>;
}
export interface NftInfo {
  commission: Array<[Principal, bigint]>;
  standard: Standard;
}
export type Price = { ICP: bigint } | { NDP: bigint } | { GHOST: bigint };
export type Result = { Ok: null } | { Err: CommonError };
export type Result_1 = { Ok: Price } | { Err: string };
export type Result_2 = { Ok: [Principal, number] } | { Err: string };
export type Result_3 = { Ok: string } | { Err: string };
export type Result_4 = { Ok: string } | { Err: CommonError };
export type Result_5 =
  | {
      Ok: Array<[string, Array<[number, [] | [Listing], [] | [number]]>]>;
    }
  | { Err: CommonError };
export type Result_6 =
  | {
      Ok: Array<[number, [] | [Listing], [] | [number]]>;
    }
  | { Err: CommonError };
export type Result_7 = { Ok: bigint } | { Err: string };
export type Standard = { Ext: null } | { DIP20: null };
export interface Stats {
  floor: bigint;
  listings: bigint;
  sales: bigint;
  highest_price_sale: bigint;
  lowest_price_sale: bigint;
  supply: bigint;
  total_volume: bigint;
}
export type Token = { Icp: null } | { Ndp: null } | { Ghost: null };
export interface _SERVICE {
  add_nft_project: ActorMethod<[string, Array<[Token, NftInfo]>], undefined>;
  address: ActorMethod<[[] | [Principal]], string>;
  admin_kill_heartbeat: ActorMethod<[], undefined>;
  admin_start_heartbeat: ActorMethod<[], undefined>;
  auto_list: ActorMethod<[string, string], Result>;
  backup_disburse: ActorMethod<[], DisburseService>;
  backup_market: ActorMethod<[], MarketService>;
  balance: ActorMethod<[Price, Principal, [] | [Array<number>]], Result_1>;
  decode_token: ActorMethod<[string], Result_2>;
  delete_nft_project: ActorMethod<[string], undefined>;
  delist: ActorMethod<[string, [] | [Array<number>], string], Result>;
  encode_token: ActorMethod<[Principal, number], string>;
  get_canister_log: ActorMethod<
    [GetLogMessagesParameters],
    CanisterLogMessages
  >;
  get_nft: ActorMethod<[string], [] | [NFT]>;
  get_nft_project: ActorMethod<[string], [] | [Array<[Token, NftInfo]>]>;
  get_owner: ActorMethod<[], Array<Principal>>;
  handle_disbursement: ActorMethod<[Disbursement], Result_3>;
  handle_failed_disbursements: ActorMethod<[], [[] | [Disbursement], Result_3]>;
  list: ActorMethod<[string, [] | [Array<number>], string, Price], Result_4>;
  listings: ActorMethod<[string], Array<[number, Listing]>>;
  lock: ActorMethod<
    [string, string, Price, Principal, [] | [Array<number>]],
    Result_4
  >;
  market_tokens_ext: ActorMethod<[string, [] | [string]], Result_5>;
  restore_disburse: ActorMethod<[DisburseService], undefined>;
  restore_market: ActorMethod<[MarketService], undefined>;
  return_back: ActorMethod<[string, string, [] | [string]], Result_4>;
  settle: ActorMethod<[string, string], Result>;
  stats: ActorMethod<[string], [Stats, Stats]>;
  tokens_ext: ActorMethod<[string, string], Result_6>;
  transfer: ActorMethod<
    [
      Price,
      Principal,
      [] | [Array<number>],
      Principal,
      [] | [Array<number>],
      Price,
      string
    ],
    Result_7
  >;
}
