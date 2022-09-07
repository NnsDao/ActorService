export const idlFactory = ({ IDL }) => {
  const AddDaoInfo = IDL.Record({
    option: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    name: IDL.Text,
    tags: IDL.Vec(IDL.Text),
    intro: IDL.Text,
    avatar: IDL.Text,
    poster: IDL.Text
  });
  const DaoStatusCode = IDL.Variant({
    Closed: IDL.Null,
    Normal: IDL.Null
  });
  const DaoInfo = IDL.Record({
    id: IDL.Nat,
    controller: IDL.Vec(IDL.Principal),
    status: DaoStatusCode,
    owner: IDL.Principal,
    tags: IDL.Vec(IDL.Text),
    canister_id: IDL.Principal
  });
  const Result = IDL.Variant({ Ok: DaoInfo, Err: IDL.Text });
  const CreateDaoInfo = IDL.Record({
    option: IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    memo: IDL.Nat64,
    name: IDL.Text,
    tags: IDL.Vec(IDL.Text),
    intro: IDL.Text,
    block_height: IDL.Nat64,
    avatar: IDL.Text,
    poster: IDL.Text
  });
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
  const Result_1 = IDL.Variant({
    Ok: CanisterStatusResponse,
    Err: IDL.Tuple(RejectionCode, IDL.Text)
  });
  const TransactionItem = IDL.Record({
    to: IDL.Text,
    status: IDL.Nat8,
    from: IDL.Text,
    memo: IDL.Nat64,
    amount: IDL.Nat64
  });
  const Result_2 = IDL.Variant({ Ok: TransactionItem, Err: IDL.Text });
  const ControllerAction = IDL.Variant({
    add: IDL.Principal,
    remove: IDL.Principal,
    clear: IDL.Null
  });
  return IDL.Service({
    add_dao: IDL.Func([IDL.Text, AddDaoInfo], [Result], []),
    create_dao: IDL.Func([CreateDaoInfo], [Result], []),
    dao_list: IDL.Func([], [IDL.Vec(DaoInfo)], ['query']),
    dao_status: IDL.Func([IDL.Text], [Result_1], ['query']),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_pay_info: IDL.Func([], [Result_2], ['query']),
    update_dao_controller: IDL.Func([IDL.Nat, ControllerAction], [Result], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
