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
export type Categories = { Default: null };
export interface DefiniteCanisterSettings {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface Info {
  describe: string;
  cover_image: string;
  icon: string;
  name: string;
  create_at: bigint;
  update_at: bigint;
}
export type Language = { Korean: null } | { Japanese: null } | { Chinese: null } | { English: null } | { Arabic: null };
export interface PodcastIterm {
  tag: Array<string>;
  categories: Categories;
  status: boolean;
  describe: string;
  title: string;
  hosts: [] | [Principal];
  cover_image: string;
  link: string;
  create_at: bigint;
  language: Language;
  update_at: bigint;
  show_note: string;
  guests: Array<Principal>;
  sub_title: string;
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
export type Result_2 = { Ok: null } | { Err: string };
export interface SetBaseInfoRes {
  describe: string;
  cover_image: string;
  icon: string;
  name: string;
}
export interface SocialLink {
  twitter: string;
  blog: string;
  instagram: string;
  email: string;
  distrikt: string;
  dmail: string;
  dscvr: string;
  telegram: string;
  github: string;
  openchat: string;
}
export interface _SERVICE {
  add_owner: (arg_0: Principal) => Promise<undefined>;
  change_admin: (arg_0: Principal) => Promise<undefined>;
  create_base_info: (arg_0: SetBaseInfoRes) => Promise<undefined>;
  create_podcast: (arg_0: PodcastIterm) => Promise<undefined>;
  delete_owner: (arg_0: Principal) => Promise<undefined>;
  deposit: (arg_0: Principal, arg_1: bigint) => Promise<Result>;
  get_admin: () => Promise<[] | [Principal]>;
  get_canister_status: (arg_0: Principal) => Promise<Result_1>;
  get_owner: () => Promise<Array<Principal>>;
  get_podcast: (arg_0: bigint) => Promise<[] | [PodcastIterm]>;
  get_podcast_base_info: () => Promise<Info>;
  get_podcast_list: () => Promise<Array<[bigint, PodcastIterm]>>;
  get_social_link: () => Promise<SocialLink>;
  set_social_link: (arg_0: SocialLink) => Promise<undefined>;
  update_base_info: (arg_0: SetBaseInfoRes) => Promise<undefined>;
  update_podcast: (arg_0: bigint, arg_1: PodcastIterm) => Promise<Result_2>;
}
