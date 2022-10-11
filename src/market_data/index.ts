export default ({ IDL }) => {
  const Operation = IDL.Variant({
    Mint: IDL.Null,
    Sale: IDL.Null,
    Transfer: IDL.Null,
    Offer: IDL.Null,
    Subdao: IDL.Null,
  });
  const Price = IDL.Variant({
    DMD: IDL.Nat64,
    ICD: IDL.Nat64,
    Icp: IDL.Nat64,
    Ndp: IDL.Nat64,
    OGY: IDL.Nat64,
    XTC: IDL.Nat64,
    GHOST: IDL.Nat64,
    LAND: IDL.Nat64,
    PLAT: IDL.Nat64,
    WICP: IDL.Nat64,
    WHALE: IDL.Nat64,
    DOGMI: IDL.Nat64,
    AVOCADO: IDL.Nat64,
    XCANIC: IDL.Nat64,
    Carrot: IDL.Nat64,
  });
  const Record = IDL.Record({
    to: IDL.Text,
    from: IDL.Text,
    time: IDL.Nat64,
    canister_id: IDL.Text,
    token_identifier: IDL.Text,
    operation: Operation,
    price: Price,
  });
  return IDL.Service({
    get_owner: IDL.Func([], [IDL.Opt(IDL.Principal)], ['query']),
    get_personal_record: IDL.Func([IDL.Text], [IDL.Opt(IDL.Vec(Record))], ['query']),
    get_record: IDL.Func([IDL.Text], [IDL.Opt(IDL.Vec(Record))], ['query']),
    get_recorder: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_token_record: IDL.Func([IDL.Text, IDL.Text], [IDL.Opt(IDL.Vec(Record))], ['query']),
    record_log: IDL.Func([IDL.Text, Record], [], []),
    set_recorder: IDL.Func([IDL.Principal], [], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
