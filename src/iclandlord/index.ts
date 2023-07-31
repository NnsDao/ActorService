export const idlFactory = ({ IDL }) => {
  const TableId = IDL.Record({ table_id: IDL.Nat64 });
  const Result = IDL.Variant({ Ok: IDL.Bool, Err: IDL.Text });
  const CallNumberReq = IDL.Record({
    table_id: IDL.Nat64,
    number: IDL.Nat32,
  });
  const CallNumberResp = IDL.Record({
    next_index: IDL.Nat32,
    rebegin: IDL.Bool,
  });
  const Result_1 = IDL.Variant({ Ok: CallNumberResp, Err: IDL.Text });
  const TableStatus = IDL.Variant({
    Begining: IDL.Null,
    Calling: IDL.Null,
    Ending: IDL.Null,
    Ready: IDL.Null,
    Waiting: IDL.Null,
  });
  const TableStatusResp = IDL.Record({
    status: TableStatus,
    current_gamer_index: IDL.Nat32,
    biggest_gamer: IDL.Opt(IDL.Principal),
    cards: IDL.Vec(IDL.Nat32),
    farmers: IDL.Vec(IDL.Principal),
    last_pokers: IDL.Vec(IDL.Nat32),
    gamers: IDL.Vec(IDL.Principal),
    biggest_num: IDL.Nat32,
    create_time: IDL.Nat64,
    multiple: IDL.Nat64,
    landlord: IDL.Opt(IDL.Principal),
    call_number: IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat32)),
    pokers: IDL.Vec(IDL.Nat32),
  });
  return IDL.Service({
    begin: IDL.Func([TableId], [Result], []),
    call_number: IDL.Func([CallNumberReq], [Result_1], []),
    cancel_gamer: IDL.Func([], [], []),
    destroy_table: IDL.Func([TableId], [], []),
    greet: IDL.Func([IDL.Text], [IDL.Text], ['query']),
    re_begin: IDL.Func([TableId], [Result], []),
    search_table: IDL.Func([], [IDL.Nat64], []),
    table_status: IDL.Func([TableId], [TableStatusResp], ['query']),
  });
};
export const init = ({ IDL }) => {
  return [];
};
