export const idlFactory = ({ IDL }) => {
  const RejectionCode = IDL.Variant({
    NoError: IDL.Null,
    CanisterError: IDL.Null,
    SysTransient: IDL.Null,
    DestinationInvalid: IDL.Null,
    Unknown: IDL.Null,
    SysFatal: IDL.Null,
    CanisterReject: IDL.Null,
  });
  const Result = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Tuple(RejectionCode, IDL.Text),
  });
  const CanisterStatusType = IDL.Variant({
    stopped: IDL.Null,
    stopping: IDL.Null,
    running: IDL.Null,
  });
  const DefiniteCanisterSettings = IDL.Record({
    freezing_threshold: IDL.Nat,
    controllers: IDL.Vec(IDL.Principal),
    memory_allocation: IDL.Nat,
    compute_allocation: IDL.Nat,
  });
  const CanisterStatusResponse = IDL.Record({
    status: CanisterStatusType,
    memory_size: IDL.Nat,
    cycles: IDL.Nat,
    settings: DefiniteCanisterSettings,
    idle_cycles_burned_per_day: IDL.Nat,
    module_hash: IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Result_1 = IDL.Variant({
    Ok: IDL.Tuple(CanisterStatusResponse),
    Err: IDL.Tuple(RejectionCode, IDL.Text),
  });
  return IDL.Service({
    canister_start: IDL.Func([IDL.Principal], [Result], []),
    canister_stop: IDL.Func([IDL.Principal], [Result], []),
    create_podcast_canister: IDL.Func([], [Result], []),
    deposit: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    get_address: IDL.Func([], [IDL.Text], []),
    get_canister_status: IDL.Func([IDL.Principal], [Result_1], []),
    get_podcast_canister: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    init_podcast: IDL.Func([IDL.Principal], [Result], []),
    need_upgrade: IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    notify_upgrade: IDL.Func([], [], []),
    reinstall_podcast: IDL.Func([IDL.Principal], [Result], []),
    update_canister_set: IDL.Func([IDL.Principal, IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)], [Result], []),
    upgrade_podcast: IDL.Func([IDL.Principal], [Result], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
