import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface JoinDaoParams {
  nickname: string;
  social: Array<Social>;
  intro: string;
  avatar: string;
}
export interface MemberItems {
  nickname: string;
  social: Array<Social>;
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
  proposer: Principal;
  proposal_state: ProposalState;
}
export interface ProposalContent {
  title: string;
  content: string;
  end_time: bigint;
}
export type ProposalState =
  | { Failed: string }
  | { Open: null }
  | { Executing: null }
  | { Rejected: null }
  | { Succeeded: null }
  | { Accepted: null };
export type Result = { Ok: Proposal } | { Err: string };
export type Result_1 = { Ok: Array<[bigint, Proposal]> } | { Err: string };
export type Result_2 = { Ok: MemberItems } | { Err: string };
export type Result_3 = { Ok: Array<MemberItems> } | { Err: string };
export type Result_4 = { Ok: boolean } | { Err: string };
export type Result_5 = { Ok: null } | { Err: string };
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
  get_proposal: ActorMethod<[bigint], Result>;
  get_proposal_list: ActorMethod<[], Result_1>;
  join: ActorMethod<[JoinDaoParams], Result_2>;
  member_list: ActorMethod<[], Result_3>;
  propose: ActorMethod<[ProposalContent], Result>;
  quit: ActorMethod<[], Result_4>;
  user_info: ActorMethod<[], Result_2>;
  vote: ActorMethod<[UserVoteArgs], Result_5>;
}
