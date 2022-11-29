import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface BasicUserInfo {
  nid: bigint;
  nickname: string;
  intro: string;
  avatar: string;
}
export interface Metadata {
  owner: [] | [Principal];
  canister_id: string;
  admin_list: Array<Principal>;
}
export type Result = { Ok: null } | { Err: string };
export type Result_1 = { Ok: UserItem } | { Err: string };
export type Result_2 = { Ok: TotalUserInfo } | { Err: string };
export type Result_3 = { Ok: Metadata } | { Err: string };
export interface StakeItem {
  status: StakeItemStatus;
  duration: StakeItemDuration;
  start_time: bigint;
  profit: string;
  project: string;
}
export type StakeItemDuration = { LongTerm: null } | { Month: number };
export type StakeItemStatus =
  | { Banned: null }
  | { Valid: null }
  | { Expired: null };
export interface TotalUserInfo {
  log: Array<UserLog>;
  nid: bigint;
  nickname: string;
  level: bigint;
  credit: bigint;
  stake: Array<StakeItem>;
  badge: Array<string>;
  wallet: Array<[bigint, string, string]>;
  intro: string;
  avatar: string;
}
export interface UserItem {
  log: Array<UserLog>;
  nid: bigint;
  nickname: string;
  level: bigint;
  credit: bigint;
  stake: Array<StakeItem>;
  badge: Array<string>;
  intro: string;
  avatar: string;
}
export interface UserLog {
  time: bigint;
  detail: string;
  event: string;
}
export interface _SERVICE {
  add_admin: ActorMethod<[Principal], Result>;
  add_stake: ActorMethod<[StakeItem], Result_1>;
  bind_wallet: ActorMethod<[[bigint, string, string]], Result>;
  get_bind_wallet: ActorMethod<[], Array<[bigint, string, string]>>;
  login: ActorMethod<[string], Result_2>;
  metadata: ActorMethod<[], Result_3>;
  system_time: ActorMethod<[], bigint>;
  update_user_info: ActorMethod<[BasicUserInfo], Result>;
  user_info: ActorMethod<[], Result_2>;
}
