import type { Principal } from '@dfinity/principal';
export interface GameItem {
  tag: Array<string>;
  is_delete: boolean;
  desc: string;
  name: string;
  banner: Array<string>;
  follow: bigint;
  avatar: string;
}
export type Result = { Ok: null } | { Err: string };
export type Result_1 = { Ok: UserInfo } | { Err: string };
export interface UserBaseInfo {
  name: string;
  avatar: string;
}
export interface UserInfo {
  name: string;
  follow: Array<bigint>;
  avatar: string;
}
export default interface _SERVICE {
  add_owner: (arg_0: Principal) => Promise<undefined>;
  cancel_follow: (arg_0: bigint) => Promise<Result>;
  create_game: (arg_0: GameItem) => Promise<undefined>;
  delete_owner: (arg_0: Principal) => Promise<undefined>;
  follow: (arg_0: bigint) => Promise<Result>;
  get_game: (arg_0: bigint) => Promise<[] | [GameItem]>;
  get_game_list: () => Promise<Array<[bigint, GameItem]>>;
  get_owner: () => Promise<Array<Principal>>;
  get_user_info: () => Promise<Result_1>;
  set_heat: (arg_0: bigint, arg_1: bigint) => Promise<Result>;
  set_user_info: (arg_0: UserBaseInfo) => Promise<undefined>;
  update_game: (arg_0: bigint, arg_1: GameItem) => Promise<Result>;
}
