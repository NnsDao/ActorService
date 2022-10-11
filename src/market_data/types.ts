import type { Principal } from '@dfinity/principal';
export type Operation = { Mint: null } | { Sale: null } | { Transfer: null } | { Offer: null } | { Subdao: null };
export type Price =
  | { DMD: bigint }
  | { ICD: bigint }
  | { Icp: bigint }
  | { Ndp: bigint }
  | { OGY: bigint }
  | { XTC: bigint }
  | { GHOST: bigint }
  | { LAND: bigint }
  | { PLAT: bigint }
  | { WICP: bigint }
  | { WHALE: bigint }
  | { DOGMI: bigint }
  | { AVOCADO: bigint }
  | { XCANIC: bigint }
  | { Carrot: bigint };
export interface Record {
  to: string;
  from: string;
  time: bigint;
  canister_id: string;
  token_identifier: string;
  operation: Operation;
  price: Price;
}
export default interface _SERVICE {
  get_owner: () => Promise<[] | [Principal]>;
  get_personal_record: (arg_0: string) => Promise<[] | [Array<Record>]>;
  get_record: (arg_0: string) => Promise<[] | [Array<Record>]>;
  get_recorder: () => Promise<Array<Principal>>;
  get_token_record: (arg_0: string, arg_1: string) => Promise<[] | [Array<Record>]>;
  record_log: (arg_0: string, arg_1: Record) => Promise<undefined>;
  set_recorder: (arg_0: Principal) => Promise<undefined>;
}
