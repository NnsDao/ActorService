export const idlFactory = ({ IDL }) => {
  const Votes = IDL.Variant({ No: IDL.Nat64, Yes: IDL.Nat64 });
  const ProposalState = IDL.Variant({
    Failed: IDL.Text,
    Open: IDL.Null,
    Executing: IDL.Null,
    Rejected: IDL.Null,
    Succeeded: IDL.Null,
    Accepted: IDL.Null
  });
  const Proposal = IDL.Record({
    id: IDL.Nat64,
    title: IDL.Text,
    content: IDL.Text,
    vote_data: IDL.Vec(IDL.Tuple(IDL.Principal, Votes)),
    end_time: IDL.Nat64,
    timestamp: IDL.Nat64,
    proposer: IDL.Principal,
    proposal_state: ProposalState
  });
  const Result = IDL.Variant({ Ok: Proposal, Err: IDL.Text });
  const Result_1 = IDL.Variant({
    Ok: IDL.Vec(IDL.Tuple(IDL.Nat64, Proposal)),
    Err: IDL.Text
  });
  const ProposalContent = IDL.Record({
    title: IDL.Text,
    content: IDL.Text,
    end_time: IDL.Nat64
  });
  const Social = IDL.Record({ key: IDL.Text, link: IDL.Text });
  const JoinDaoParams = IDL.Record({
    nickname: IDL.Text,
    social: IDL.Vec(Social),
    intro: IDL.Text,
    avatar: IDL.Text
  });
  const MemberItems = IDL.Record({
    nickname: IDL.Text,
    social: IDL.Vec(Social),
    intro: IDL.Text,
    status_code: IDL.Int8,
    avatar: IDL.Text
  });
  const Result_2 = IDL.Variant({ Ok: MemberItems, Err: IDL.Text });
  const Result_3 = IDL.Variant({
    Ok: IDL.Vec(MemberItems),
    Err: IDL.Text
  });
  const Result_4 = IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text });
  const UserVoteArgs = IDL.Record({
    id: IDL.Nat64,
    principal: IDL.Opt(IDL.Principal),
    vote: Votes
  });
  const Result_5 = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  return IDL.Service({
    get_proposal: IDL.Func([IDL.Nat64], [Result], ['query']),
    get_proposal_list: IDL.Func([], [Result_1], ['query']),
    initiate_proposal: IDL.Func([ProposalContent], [Result], []),
    join: IDL.Func([JoinDaoParams], [Result_2], []),
    member_list: IDL.Func([], [Result_3], []),
    quit: IDL.Func([], [Result_4], []),
    user_info: IDL.Func([], [Result_2], []),
    vote: IDL.Func([UserVoteArgs], [Result_5], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
