export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  const GameItem = IDL.Record({
    tag: IDL.Vec(IDL.Text),
    is_delete: IDL.Bool,
    desc: IDL.Text,
    name: IDL.Text,
    banner: IDL.Vec(IDL.Text),
    follow: IDL.Nat64,
    avatar: IDL.Text,
  });
  const UserInfo = IDL.Record({
    name: IDL.Text,
    follow: IDL.Vec(IDL.Nat64),
    avatar: IDL.Text,
  });
  const Result_1 = IDL.Variant({ Ok: UserInfo, Err: IDL.Text });
  const UserBaseInfo = IDL.Record({ name: IDL.Text, avatar: IDL.Text });
  return IDL.Service({
    add_owner: IDL.Func([IDL.Principal], [], []),
    cancel_follow: IDL.Func([IDL.Nat64], [Result], []),
    create_game: IDL.Func([GameItem], [], []),
    delete_owner: IDL.Func([IDL.Principal], [], []),
    follow: IDL.Func([IDL.Nat64], [Result], []),
    get_game: IDL.Func([IDL.Nat64], [IDL.Opt(GameItem)], ['query']),
    get_game_list: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat64, GameItem))], ['query']),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_user_info: IDL.Func([], [Result_1], ['query']),
    set_heat: IDL.Func([IDL.Nat64, IDL.Nat64], [Result], []),
    set_user_info: IDL.Func([UserBaseInfo], [], []),
    update_game: IDL.Func([IDL.Nat64, GameItem], [Result], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
