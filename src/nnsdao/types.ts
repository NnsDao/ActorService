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
  property: [] | [Array<[string, string]>];
}
export type ProposalState =
  | { Failed: string }
  | { Open: null }
  | { Executing: null }
  | { Rejected: null }
  | { Succeeded: null }
  | { Accepted: null };
export type Result = { Ok: string } | { Err: string };
export type Result_1 = { Ok: Proposal } | { Err: string };
export type Result_2 = { Ok: Array<[bigint, Proposal]> } | { Err: string };
export type Result_3 = { Ok: MemberItems } | { Err: string };
export type Result_4 = { Ok: Array<MemberItems> } | { Err: string };
export type Result_5 = { Ok: boolean } | { Err: string };
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
  get_handled_proposal: ActorMethod<[], Array<[bigint, Result]>>;
  get_proposal: ActorMethod<[bigint], Result_1>;
  get_proposal_list: ActorMethod<[], Result_2>;
  join: ActorMethod<[JoinDaoParams], Result_3>;
  member_list: ActorMethod<[], Result_4>;
  propose: ActorMethod<[ProposalContent], Result_1>;
  quit: ActorMethod<[], Result_5>;
  user_info: ActorMethod<[], Result_3>;
  vote: ActorMethod<[UserVoteArgs], Result_6>;
}
