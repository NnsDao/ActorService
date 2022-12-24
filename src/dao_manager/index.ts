export const idlFactory = ({ IDL }) => {
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
  const Result = IDL.Variant({
    Ok: CanisterStatusResponse,
    Err: IDL.Tuple(RejectionCode, IDL.Text)
  });
  const CreateDaoOptions = IDL.Record({
    memo: IDL.Nat64,
    block_height: IDL.Nat64
  });
  const Result_1 = IDL.Variant({ Ok: IDL.Text, Err: IDL.Text });
  const TransactionItem = IDL.Record({
    to: IDL.Text,
    status: IDL.Nat8,
    from: IDL.Text,
    memo: IDL.Nat64,
    amount: IDL.Nat64
  });
  const Result_2 = IDL.Variant({ Ok: TransactionItem, Err: IDL.Text });
  const Result_3 = IDL.Variant({
    Ok: IDL.Null,
    Err: IDL.Tuple(RejectionCode, IDL.Text)
  });
  const ControllerAction = IDL.Variant({
    add: IDL.Principal,
    remove: IDL.Principal
  });
  const Result_4 = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  return IDL.Service({
    add_dao: IDL.Func([IDL.Text], [IDL.Vec(IDL.Text)], []),
    add_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], []),
    canister_status: IDL.Func([], [Result], []),
    create_dao: IDL.Func([CreateDaoOptions], [Result_1], []),
    dao_list: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_pay_info: IDL.Func([], [Result_2], []),
    reinstall_canister: IDL.Func([], [Result_3], []),
    transaction_log: IDL.Func([], [IDL.Vec(TransactionItem)], ['query']),
    update_dao_controller: IDL.Func([ControllerAction], [Result_4], []),
    upgrade_canister: IDL.Func([], [Result_3], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
