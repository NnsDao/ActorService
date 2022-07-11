import type { ActorMethod } from '@dfinity/agent';
import type { Principal } from '@dfinity/principal';

export type Amount = { ICP: bigint } | { NDP: bigint };
export interface CanisterLogMessages {
  data: Array<LogMessageData>;
  lastAnalyzedMessageTimeNanos: [] | [bigint];
}
export type CommonError = { InvalidToken: string } | { Other: string };
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
  amount: Amount;
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
  price: Amount;
}
export interface LocalSaleStats {
  icp: Stats;
  ndp: Stats;
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
  stats: LocalSaleStats;
}
export interface NftInfo {
  commission: Array<[Principal, bigint]>;
  standard: Standard;
}
export type Result = { Ok: [Principal, number] } | { Err: string };
export type Result_1 = { Ok: null } | { Err: CommonError };
export type Result_2 = { Ok: string } | { Err: string };
export type Result_3 = { Ok: string } | { Err: CommonError };
export type Result_4 =
  | {
      Ok: Array<[number, [] | [Listing], [] | [number]]>;
    }
  | { Err: CommonError };
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
export type Token = { Icp: null } | { Ndp: null };
export interface _SERVICE {
  add_nft_project: ActorMethod<[string, Array<[Token, NftInfo]>], undefined>;
  address: ActorMethod<[[] | [Principal]], string>;
  admin_kill_heartbeat: ActorMethod<[], undefined>;
  admin_start_heartbeat: ActorMethod<[], undefined>;
  backup_disburse: ActorMethod<[], DisburseService>;
  backup_market: ActorMethod<[], MarketService>;
  decode_token: ActorMethod<[string], Result>;
  delete_nft_project: ActorMethod<[string], undefined>;
  delist: ActorMethod<[string, [] | [Array<number>], string], Result_1>;
  encode_token: ActorMethod<[Principal, number], string>;
  get_canister_log: ActorMethod<[GetLogMessagesParameters], CanisterLogMessages>;
  get_market_nft: ActorMethod<[Principal, [] | [string]], [] | [Array<[string, Array<number>]>]>;
  get_nft: ActorMethod<[string], [] | [NFT]>;
  get_nft_project: ActorMethod<[string], [] | [Array<[Token, NftInfo]>]>;
  get_owner: ActorMethod<[], Array<Principal>>;
  handle_disbursement: ActorMethod<[Disbursement], Result_2>;
  handle_failed_disbursements: ActorMethod<[], [[] | [Disbursement], Result_2]>;
  list: ActorMethod<[string, [] | [Array<number>], string, Amount], Result_3>;
  listings: ActorMethod<[string], Array<[number, Listing]>>;
  lock: ActorMethod<[string, string, Amount, Principal, [] | [Array<number>]], Result_3>;
  restore_disburse: ActorMethod<[DisburseService], undefined>;
  restore_market: ActorMethod<[MarketService], undefined>;
  return_back: ActorMethod<[string, string, [] | [string]], Result_3>;
  settle: ActorMethod<[string, string], Result_1>;
  stats: ActorMethod<[string], [Stats, Stats]>;
  tokens_ext: ActorMethod<[string, string], Result_4>;
}
