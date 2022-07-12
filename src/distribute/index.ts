export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ Ok: IDL.Nat64, Err: IDL.Text });
  const Result_1 = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  return IDL.Service({
    add_white_list_bulk: IDL.Func([IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat64))], [Result], []),
    get_err_log: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_success_log: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    get_white_list: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat64))], ['query']),
    try_exchange: IDL.Func([], [Result_1], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
