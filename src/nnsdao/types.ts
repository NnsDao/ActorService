import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface DaoInfo {
  option: [] | [Array<[string, string]>];
  name: string;
  tags: Array<string>;
  canister_id: string;
  intro: string;
  avatar: string;
  poster: string;
}
export interface JoinDaoParams {
  nickname: string;
  social: Array<Social>;
  intro: string;
  avatar: string;
}
export interface MemberItems {
  principal: Principal;
  nickname: string;
  social: Array<Social>;
  join_at: bigint;
  intro: string;
  status_code: number;
  avatar: string;
}
export interface Proposal {
  id: bigint;
  title: string;
  content: string;
  vote_data: Array<[Principal, Votes]>;
  end_time: bigint;
  timestamp: bigint;
  property: [] | [Array<[string, string]>];
  proposer: Principal;
  proposal_state: ProposalState;
}
export interface ProposalContent {
  title: string;
  content: string;
  end_time: bigint;
  property: [] | [Array<[string, string]>];
}
export type ProposalState =
  | { Failed: string }
  | { Open: null }
  | { Executing: null }
  | { Rejected: null }
  | { Succeeded: null }
  | { Accepted: null };
export type Result = { Ok: DaoInfo } | { Err: string };
export type Result_1 = { Ok: string } | { Err: string };
export type Result_2 = { Ok: Proposal } | { Err: string };
export type Result_3 = { Ok: Array<[bigint, Proposal]> } | { Err: string };
export type Result_4 = { Ok: MemberItems } | { Err: string };
export type Result_5 = { Ok: Array<MemberItems> } | { Err: string };
export type Result_6 = { Ok: null } | { Err: string };
export interface Social {
  key: string;
  link: string;
}
export interface UserVoteArgs {
  id: bigint;
  principal: [] | [Principal];
  vote: Votes;
}
export type Votes = { No: bigint } | { Yes: bigint };
export interface _SERVICE {
  dao_info: ActorMethod<[], Result>;
  get_handled_proposal: ActorMethod<[], Array<[bigint, Result_1]>>;
  get_proposal: ActorMethod<[bigint], Result_2>;
  get_proposal_list: ActorMethod<[], Result_3>;
  join: ActorMethod<[JoinDaoParams], Result_4>;
  member_list: ActorMethod<[], Result_5>;
  propose: ActorMethod<[ProposalContent], Result_2>;
  quit: ActorMethod<[], Result_4>;
  update_dao_info: ActorMethod<[DaoInfo], Result>;
  user_info: ActorMethod<[[] | [Principal]], Result_4>;
  vote: ActorMethod<[UserVoteArgs], Result_6>;
}
