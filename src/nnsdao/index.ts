export const idlFactory = ({ IDL }) => {
  const StackingItem = IDL.Record({
    principal: IDL.Opt(IDL.Principal),
    duration: IDL.Nat8,
    amount: IDL.Nat64
  });
  const Result = IDL.Variant({ Ok: IDL.Int32, Err: IDL.Text });
  return IDL.Service({
    stacking_list: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Nat64, StackingItem))],
      ['query']
    ),
    test: IDL.Func([], [Result], ['query'])
  });
};
export const init = ({ IDL }) => {
  return [IDL.Principal];
};
