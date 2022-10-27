export const idlFactory = ({ IDL }) => {
  const Weight = IDL.Record({
    fifth: IDL.Tuple(IDL.Nat32, IDL.Nat32),
    first: IDL.Tuple(IDL.Nat32, IDL.Nat32),
    third: IDL.Tuple(IDL.Nat32, IDL.Nat32),
    second: IDL.Tuple(IDL.Nat32, IDL.Nat32),
    fourth: IDL.Tuple(IDL.Nat32, IDL.Nat32)
  });
  const StakingItem = IDL.Record({
    weight: IDL.Nat32,
    earnings: IDL.Nat64,
    number: IDL.Opt(IDL.Nat32),
    timestamp: IDL.Nat64
  });
  const Summary = IDL.Record({
    describe: IDL.Text,
    total: IDL.Nat64,
    total_weight: IDL.Nat32,
    cycle: IDL.Nat32,
    nri_limit: IDL.Nat32
  });
  const Staking = IDL.Record({
    weight: Weight,
    staking_list: IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(StakingItem))),
    summary: Summary,
    nft_list: IDL.Vec(IDL.Nat32)
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
  const Result = IDL.Variant({
    Ok: IDL.Tuple(IDL.Bool),
    Err: IDL.Tuple(RejectionCode, IDL.Text)
  });
  const CommonError = IDL.Variant({
    InvalidToken: IDL.Text,
    Other: IDL.Text
  });
  const BearerResponse = IDL.Variant({ ok: IDL.Text, err: CommonError });
  const Result_1 = IDL.Variant({
    Ok: IDL.Tuple(BearerResponse),
    Err: IDL.Tuple(RejectionCode, IDL.Text)
  });
  return IDL.Service({
    backup_all_data: IDL.Func([], [Staking], ['query']),
    check_nri: IDL.Func([IDL.Nat32], [IDL.Bool], ['query']),
    get_staking: IDL.Func([], [IDL.Opt(IDL.Vec(StakingItem))], ['query']),
    get_staking_all: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(StakingItem)))],
      ['query']
    ),
    get_summary: IDL.Func([], [Summary], ['query']),
    set_summary: IDL.Func([Summary], [], []),
    set_weight: IDL.Func([Weight], [], ['query']),
    staking_back: IDL.Func([IDL.Nat32], [Result], []),
    staking_up: IDL.Func([IDL.Nat32], [Result_1], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
