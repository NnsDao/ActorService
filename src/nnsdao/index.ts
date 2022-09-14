export const idlFactory = ({ IDL }) => {
  const DaoInfo = IDL.Record({
    option: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    name: IDL.Text,
    tags: IDL.Vec(IDL.Text),
    intro: IDL.Text,
    avatar: IDL.Text,
    poster: IDL.Text
  });
  const Result = IDL.Variant({ Ok: DaoInfo, Err: IDL.Text });
  const Result_1 = IDL.Variant({ Ok: IDL.Text, Err: IDL.Text });
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
    property: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    proposer: IDL.Principal,
    proposal_state: ProposalState
  });
  const Result_2 = IDL.Variant({ Ok: Proposal, Err: IDL.Text });
  const Result_3 = IDL.Variant({
    Ok: IDL.Vec(IDL.Tuple(IDL.Nat64, Proposal)),
    Err: IDL.Text
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
  const Result_4 = IDL.Variant({ Ok: MemberItems, Err: IDL.Text });
  const Result_5 = IDL.Variant({
    Ok: IDL.Vec(MemberItems),
    Err: IDL.Text
  });
  const ProposalContent = IDL.Record({
    title: IDL.Text,
    content: IDL.Text,
    end_time: IDL.Nat64,
    property: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)))
  });
  const UserVoteArgs = IDL.Record({
    id: IDL.Nat64,
    principal: IDL.Opt(IDL.Principal),
    vote: Votes
  });
  const Result_6 = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  return IDL.Service({
    dao_info: IDL.Func([], [Result], []),
    get_handled_proposal: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Nat64, Result_1))],
      ['query']
    ),
    get_proposal: IDL.Func([IDL.Nat64], [Result_2], ['query']),
    get_proposal_list: IDL.Func([], [Result_3], ['query']),
    join: IDL.Func([JoinDaoParams], [Result_4], []),
    member_list: IDL.Func([], [Result_5], []),
    propose: IDL.Func([ProposalContent], [Result_2], []),
    quit: IDL.Func([], [Result_4], []),
    update_dao_info: IDL.Func([DaoInfo], [Result], []),
    user_info: IDL.Func([], [Result_4], []),
    vote: IDL.Func([UserVoteArgs], [Result_6], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
