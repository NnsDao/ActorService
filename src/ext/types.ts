import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export type Balance = bigint;
export interface BalanceRequest {
  token: TokenIdentifier;
  user: User;
}
export type BalanceResponse = { ok: Balance } | { err: CommonError__1 };
export type Balance__1 = bigint;
export interface BreedData {
  fee: [] | [Balance__1];
  canBreed: boolean;
  cost: Balance__1;
  generation: Generation;
  breedTime: [] | [Time];
}
export type BreedId = number;
export type CommonError = { InvalidToken: TokenIdentifier } | { Other: string };
export type CommonError__1 = { InvalidToken: TokenIdentifier } | { Other: string };
export type Extension = string;
export type Generation = number;
export type HeaderField = [string, string];
export interface HttpRequest {
  url: string;
  method: string;
  body: Array<number>;
  headers: Array<HeaderField>;
}
export interface HttpResponse {
  body: Array<number>;
  headers: Array<HeaderField>;
  status_code: number;
}
export interface ListRequest {
  token: TokenIdentifier__1;
  from_subaccount: [] | [SubAccount__1];
  price: [] | [bigint];
}
export interface Listing {
  locked: [] | [Time];
  seller: Principal;
  price: bigint;
}
export type Memo = Array<number>;
export type Memo__1 = Array<number>;
export type Metadata =
  | {
      fungible: {
        decimals: number;
        metadata: [] | [Array<number>];
        name: string;
        symbol: string;
      };
    }
  | { nonfungible: { metadata: [] | [Array<number>] } };
export interface MintRequest {
  to: User;
  metadata: [] | [Array<number>];
}
export interface NotifyLog {
  tokenid: TokenIdentifier__1;
  memo: Memo__1;
  user: User__1;
  amount: Balance__1;
}
export type Result =
  | {
      ok: Array<[TokenIndex, [] | [Listing], [] | [Array<number>], [] | [BreedData]]>;
    }
  | { err: CommonError };
export type Result_1 = { ok: Array<TokenIndex> } | { err: CommonError };
export type Result_2 = { ok: Balance__1 } | { err: CommonError };
export type Result_3 = { ok: null } | { err: CommonError };
export type Result_4 = { ok: null } | { err: string };
export type Result_5 = { ok: [AccountIdentifier__1, bigint] } | { err: string };
export type Result_6 = { ok: Metadata } | { err: CommonError };
export type Result_7 = { ok: AccountIdentifier__1 } | { err: CommonError };
export type Result_8 = { ok: TokenIndex } | { err: CommonError };
export type Result_9 = { ok: [AccountIdentifier__1, [] | [Listing]] } | { err: CommonError };
export interface Sale {
  token: TokenIndex;
  expires: Time;
  subaccount: SubAccount__1;
  buyer: AccountIdentifier__1;
  price: bigint;
}
export interface SaleTransaction {
  token: TokenIndex;
  time: Time;
  seller: Principal;
  buyer: AccountIdentifier__1;
  price: bigint;
}
export interface Settlement {
  subaccount: SubAccount__1;
  seller: Principal;
  buyer: AccountIdentifier__1;
  price: bigint;
}
export interface Sire {
  metadata: [] | [Array<number>];
  index: TokenIndex;
  breedData: BreedData;
}
export interface SireRequest {
  token: TokenIdentifier__1;
  from_subaccount: [] | [SubAccount__1];
  price: [] | [Balance__1];
}
export type SubAccount = Array<number>;
export type SubAccount__1 = Array<number>;
export type Time = bigint;
export type TokenIdentifier = string;
export type TokenIdentifier__1 = string;
export type TokenIndex = number;
export interface Transaction2 {
  token: TokenIdentifier__1;
  time: Time;
  seller: Principal;
  buyer: AccountIdentifier__1;
  price: bigint;
}
export interface TransferRequest {
  to: User;
  token: TokenIdentifier;
  notify: boolean;
  from: User;
  memo: Memo;
  subaccount: [] | [SubAccount];
  amount: Balance;
}
export type TransferResponse =
  | { ok: Balance }
  | {
      err:
        | { CannotNotify: AccountIdentifier }
        | { InsufficientBalance: null }
        | { InvalidToken: TokenIdentifier }
        | { Rejected: null }
        | { Unauthorized: AccountIdentifier }
        | { Other: string };
    };
export type User = { principal: Principal } | { address: AccountIdentifier };
export type User__1 = { principal: Principal } | { address: AccountIdentifier };
export interface Wearable {
  hat: [] | [[number, number]];
  pet: [] | [[number, number]];
  accessory: [] | [[number, number]];
  eyewear: [] | [[number, number]];
}
export default interface _SERVICE {
  acceptCycles: () => Promise<undefined>;
  adminKillHeartbeat: () => Promise<undefined>;
  adminStartHeartbeat: () => Promise<undefined>;
  allPayments: () => Promise<Array<[Principal, Array<SubAccount__1>]>>;
  allSettlements: () => Promise<Array<[TokenIndex, Settlement]>>;
  availableCycles: () => Promise<bigint>;
  backup: () => Promise<
    [
      Array<[TokenIndex, AccountIdentifier__1]>,
      Array<[AccountIdentifier__1, Array<TokenIndex>]>,
      Array<[TokenIndex, Metadata]>
    ]
  >;
  balance: (arg_0: BalanceRequest) => Promise<BalanceResponse>;
  bearer: (arg_0: TokenIdentifier__1) => Promise<Result_7>;
  clearPayments: (arg_0: Principal, arg_1: Array<SubAccount__1>) => Promise<undefined>;
  crnDetails: () => Promise<[bigint, Balance__1, bigint, Array<[AccountIdentifier__1, Balance__1]>]>;
  cronCapEvents: () => Promise<undefined>;
  cronDisbursements: () => Promise<undefined>;
  cronSettlements: () => Promise<undefined>;
  details: (arg_0: TokenIdentifier__1) => Promise<Result_9>;
  disbursements: () => Promise<Array<[TokenIndex, AccountIdentifier__1, SubAccount__1, bigint]>>;
  extensions: () => Promise<Array<Extension>>;
  failedSales: () => Promise<Array<[AccountIdentifier__1, SubAccount__1]>>;
  generations: () => Promise<Array<[TokenIndex, [Generation, BreedId]]>>;
  getAllPayments: () => Promise<Array<[Principal, Array<SubAccount__1>]>>;
  getAllWearables: () => Promise<Array<[TokenIndex, Wearable]>>;
  getBestPrice: (arg_0: TokenIndex) => Promise<[] | [bigint]>;
  getBuyers: () => Promise<Array<[AccountIdentifier__1, Array<TokenIndex>]>>;
  getMinted: () => Promise<TokenIndex>;
  getMinter: () => Promise<Principal>;
  getRegistry: () => Promise<Array<[TokenIndex, AccountIdentifier__1]>>;
  getSold: () => Promise<TokenIndex>;
  getTokens: () => Promise<Array<[TokenIndex, Metadata]>>;
  getTransactions: (arg_0: [] | [bigint]) => Promise<Array<Transaction2>>;
  historicExport: () => Promise<boolean>;
  http_request: (arg_0: HttpRequest) => Promise<HttpResponse>;
  index: (arg_0: TokenIdentifier__1) => Promise<Result_8>;
  initCap: () => Promise<undefined>;
  list: (arg_0: ListRequest) => Promise<Result_3>;
  listings: () => Promise<Array<[TokenIndex, Listing, Metadata]>>;
  lock: (
    arg_0: TokenIdentifier__1,
    arg_1: bigint,
    arg_2: AccountIdentifier__1,
    arg_3: SubAccount__1
  ) => Promise<Result_7>;
  metadata: (arg_0: TokenIdentifier__1) => Promise<Result_6>;
  mintNFT: (arg_0: MintRequest) => Promise<TokenIndex>;
  notifications: () => Promise<Array<NotifyLog>>;
  payments: () => Promise<[] | [Array<SubAccount__1>]>;
  receiveWearable: (
    arg_0: TokenIndex,
    arg_1: TokenIndex,
    arg_2: Array<number>,
    arg_3: AccountIdentifier__1
  ) => Promise<{ replaced: TokenIndex } | { success: null } | { failed: null }>;
  refresh: () => Promise<undefined>;
  refunds: () => Promise<[] | [Array<SubAccount__1>]>;
  removeRefunds: (arg_0: Array<SubAccount__1>) => Promise<undefined>;
  reserve: (
    arg_0: TokenIdentifier__1,
    arg_1: bigint,
    arg_2: AccountIdentifier__1,
    arg_3: SubAccount__1
  ) => Promise<Result_5>;
  retreive: (arg_0: AccountIdentifier__1) => Promise<Result_4>;
  retreiveSnapshot: (arg_0: string) => Promise<Array<AccountIdentifier__1>>;
  salesSettlements: () => Promise<Array<[AccountIdentifier__1, Sale]>>;
  salesStats: () => Promise<[boolean, Array<[TokenIndex, Time, Metadata]>, bigint]>;
  salesTransactions: () => Promise<Array<SaleTransaction>>;
  setMinter: (arg_0: Principal) => Promise<undefined>;
  settings: () => Promise<[boolean, Array<number>, Time, Time, Time, Array<Balance__1>, Principal]>;
  settle: (arg_0: TokenIdentifier__1) => Promise<Result_3>;
  settlements: () => Promise<Array<[TokenIndex, AccountIdentifier__1, bigint]>>;
  sire: (arg_0: SireRequest) => Promise<Result_3>;
  sires: () => Promise<Array<Sire>>;
  stats: () => Promise<[bigint, bigint, bigint, bigint, bigint, bigint, bigint]>;
  supply: (arg_0: TokenIdentifier__1) => Promise<Result_2>;
  takeSnapshot: (arg_0: string) => Promise<bigint>;
  tokenTransferNotification: (
    arg_0: TokenIdentifier__1,
    arg_1: User__1,
    arg_2: Balance__1,
    arg_3: Memo__1
  ) => Promise<[] | [Balance__1]>;
  tokens: (arg_0: AccountIdentifier__1) => Promise<Result_1>;
  tokens_ext: (arg_0: AccountIdentifier__1) => Promise<Result>;
  transactions: () => Promise<Array<Transaction2>>;
  transfer: (arg_0: TransferRequest) => Promise<TransferResponse>;
}
