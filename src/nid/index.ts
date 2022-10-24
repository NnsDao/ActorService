export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  const StakeItemStatus = IDL.Variant({
    Banned: IDL.Null,
    Valid: IDL.Null,
    Expired: IDL.Null
  });
  const StakeItemDuration = IDL.Variant({
    LongTerm: IDL.Null,
    Month: IDL.Nat32
  });
  const StakeItem = IDL.Record({
    status: StakeItemStatus,
    duration: StakeItemDuration,
    start_time: IDL.Nat64,
    profit: IDL.Text,
    project: IDL.Text
  });
  const UserLog = IDL.Record({
    time: IDL.Int64,
    detail: IDL.Text,
    event: IDL.Text
  });
  const UserItem = IDL.Record({
    log: IDL.Vec(UserLog),
    nid: IDL.Nat64,
    nickname: IDL.Text,
    level: IDL.Nat64,
    credit: IDL.Nat64,
    stake: IDL.Vec(StakeItem),
    badge: IDL.Vec(IDL.Text),
    intro: IDL.Text,
    avatar: IDL.Text
  });
  const Result_1 = IDL.Variant({ Ok: UserItem, Err: IDL.Text });
  const Metadata = IDL.Record({
    owner: IDL.Opt(IDL.Principal),
    canister_id: IDL.Text,
    admin_list: IDL.Vec(IDL.Principal)
  });
  const Result_2 = IDL.Variant({ Ok: Metadata, Err: IDL.Text });
  const BasicUserInfo = IDL.Record({
    nid: IDL.Nat64,
    nickname: IDL.Text,
    intro: IDL.Text,
    avatar: IDL.Text
  });
  return IDL.Service({
    add_admin: IDL.Func([IDL.Principal], [Result], []),
    add_stake: IDL.Func([StakeItem], [Result_1], []),
    bind_wallet: IDL.Func(
      [IDL.Tuple(IDL.Nat64, IDL.Text, IDL.Text)],
      [Result],
      []
    ),
    login: IDL.Func([IDL.Text], [Result_1], []),
    metadata: IDL.Func([], [Result_2], ['query']),
    system_time: IDL.Func([], [IDL.Nat64], ['query']),
    update_user_info: IDL.Func([BasicUserInfo], [Result], []),
    user_info: IDL.Func([], [Result_1], ['query'])
  });
};
export const init = ({ IDL }) => {
  return [];
};
