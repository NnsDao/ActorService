export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  const DaoInfo = IDL.Record({
    option: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    name: IDL.Text,
    tags: IDL.Vec(IDL.Text),
    canister_id: IDL.Text,
    intro: IDL.Text,
    avatar: IDL.Text,
    poster: IDL.Text
  });
  const Result_1 = IDL.Variant({ Ok: DaoInfo, Err: IDL.Text });
  const Status = IDL.Variant({
    stopped: IDL.Null,
    stopping: IDL.Null,
    running: IDL.Null
  });
  const DefiniteCanisterSettings = IDL.Record({
    freezing_threshold: IDL.Nat,
    controllers: IDL.Vec(IDL.Principal),
    memory_allocation: IDL.Nat,
    compute_allocation: IDL.Nat
  });
  const CanisterStatusResponse = IDL.Record({
    status: Status,
    memory_size: IDL.Nat,
    cycles: IDL.Nat,
    settings: DefiniteCanisterSettings,
    module_hash: IDL.Opt(IDL.Vec(IDL.Nat8))
  });
  const RejectionCode = IDL.Variant({
    NoError: IDL.Null,
    CanisterError: IDL.Null,
    SysTransient: IDL.Null,
    DestinationInvalid: IDL.Null,
    Unknown: IDL.Null,
    SysFatal: IDL.Null,
    CanisterReject: IDL.Null
  });
  const Result_2 = IDL.Variant({
    Ok: IDL.Tuple(CanisterStatusResponse),
    Err: IDL.Tuple(RejectionCode, IDL.Text)
  });
  const Result_3 = IDL.Variant({ Ok: IDL.Text, Err: IDL.Text });
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
    start_time: IDL.Nat64,
    timestamp: IDL.Nat64,
    property: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    proposer: IDL.Principal,
    proposal_state: ProposalState
  });
  const Result_4 = IDL.Variant({ Ok: Proposal, Err: IDL.Text });
  const Result_5 = IDL.Variant({
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
    principal: IDL.Principal,
    nickname: IDL.Text,
    social: IDL.Vec(Social),
    join_at: IDL.Nat64,
    intro: IDL.Text,
    last_visit_at: IDL.Nat64,
    status_code: IDL.Int8,
    avatar: IDL.Text
  });
  const Result_6 = IDL.Variant({ Ok: MemberItems, Err: IDL.Text });
  const Result_7 = IDL.Variant({
    Ok: IDL.Vec(MemberItems),
    Err: IDL.Text
  });
  const ProposalContent = IDL.Record({
    title: IDL.Text,
    content: IDL.Text,
    end_time: IDL.Nat64,
    start_time: IDL.Nat64,
    property: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)))
  });
  const UserVoteArgs = IDL.Record({
    id: IDL.Nat64,
    principal: IDL.Opt(IDL.Principal),
    vote: Votes
  });
  return IDL.Service({
    add_owner: IDL.Func([IDL.Principal], [Result], []),
    dao_info: IDL.Func([], [Result_1], []),
    dao_status: IDL.Func([], [Result_2], []),
    get_handled_proposal: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Nat64, Result_3))],
      ['query']
    ),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_proposal: IDL.Func([IDL.Nat64], [Result_4], ['query']),
    get_proposal_list: IDL.Func([], [Result_5], ['query']),
    join: IDL.Func([JoinDaoParams], [Result_6], []),
    member_list: IDL.Func([], [Result_7], []),
    propose: IDL.Func([ProposalContent], [Result_4], []),
    quit: IDL.Func([], [Result_6], []),
    update_dao_info: IDL.Func([DaoInfo], [Result_1], []),
    user_info: IDL.Func([IDL.Opt(IDL.Principal)], [Result_6], []),
    vote: IDL.Func([UserVoteArgs], [Result], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
