export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  const CreateDaoInfo = IDL.Record({
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
    id: IDL.Nat64,
    controller: IDL.Vec(IDL.Principal),
    status: DaoStatusCode,
    owner: IDL.Principal,
    canister_id: IDL.Principal,
    dao_type: IDL.Text
  });
  const ControllerAction = IDL.Variant({
    add: IDL.Principal,
    remove: IDL.Principal,
    clear: IDL.Null
  });
  return IDL.Service({
    add_dao: IDL.Func([IDL.Nat64, IDL.Principal], [Result], []),
    create_dao: IDL.Func([CreateDaoInfo], [Result], []),
    dao_list: IDL.Func([], [IDL.Vec(DaoInfo)], ['query']),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    greet: IDL.Func([IDL.Text], [IDL.Text], ['query']),
    update_dao_controller: IDL.Func([IDL.Nat64, ControllerAction], [Result], [])
  });
};
export const init = ({ IDL }) => {
  return [];
};
