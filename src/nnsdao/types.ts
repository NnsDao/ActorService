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
export interface ProposalArg {
  title: string;
  content: string;
  end_time: bigint;
  proposer: Principal;
}
export type ProposalState =
  | { Failed: string }
  | { Open: null }
  | { Executing: null }
  | { Rejected: null }
  | { Succeeded: null }
  | { Accepted: null };
export type Result = { Ok: Proposal } | { Err: string };
export type Result_1 = { Ok: null } | { Err: string };
export type Result_2 = { Ok: MemberItems } | { Err: string };
export type Result_3 = { Ok: Array<MemberItems> } | { Err: string };
export type Result_4 = { Ok: Array<[bigint, Proposal]> } | { Err: string };
export type Result_5 = { Ok: boolean } | { Err: string };
export interface Social {
  key: string;
  link: string;
}
export interface UserVoteArgs {
  id: bigint;
  vote: Votes;
}
export type Votes = { No: bigint } | { Yes: bigint };
export interface _SERVICE {
  get_proposal: ActorMethod<[bigint], Result>;
  initiate_proposal: ActorMethod<[ProposalArg], Result_1>;
  join: ActorMethod<[JoinDaoParams], Result_2>;
  member_list: ActorMethod<[], Result_3>;
  proposal_list: ActorMethod<[], Result_4>;
  quit: ActorMethod<[], Result_5>;
  votes: ActorMethod<[UserVoteArgs], Result_1>;
}
