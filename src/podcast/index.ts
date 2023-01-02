export const idlFactory = ({ IDL }) => {
  const SetBaseInfoRes = IDL.Record({
    describe: IDL.Text,
    cover_image: IDL.Text,
    icon: IDL.Text,
    name: IDL.Text,
  });
  const Categories = IDL.Variant({ Default: IDL.Null });
  const Language = IDL.Variant({
    Korean: IDL.Null,
    Japanese: IDL.Null,
    Chinese: IDL.Null,
    English: IDL.Null,
    Arabic: IDL.Null,
  });
  const PodcastIterm = IDL.Record({
    tag: IDL.Vec(IDL.Text),
    categories: Categories,
    status: IDL.Bool,
    describe: IDL.Text,
    title: IDL.Text,
    hosts: IDL.Opt(IDL.Principal),
    cover_image: IDL.Text,
    link: IDL.Text,
    create_at: IDL.Nat64,
    language: Language,
    update_at: IDL.Nat64,
    show_note: IDL.Text,
    guests: IDL.Vec(IDL.Principal),
    sub_title: IDL.Text,
  });
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
  const Info = IDL.Record({
    describe: IDL.Text,
    cover_image: IDL.Text,
    icon: IDL.Text,
    name: IDL.Text,
    create_at: IDL.Nat64,
    update_at: IDL.Nat64,
  });
  const SocialLink = IDL.Record({
    twitter: IDL.Text,
    blog: IDL.Text,
    instagram: IDL.Text,
    email: IDL.Text,
    distrikt: IDL.Text,
    dmail: IDL.Text,
    dscvr: IDL.Text,
    telegram: IDL.Text,
    github: IDL.Text,
    openchat: IDL.Text,
  });
  const Result_2 = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  return IDL.Service({
    add_owner: IDL.Func([IDL.Principal], [], []),
    change_admin: IDL.Func([IDL.Principal], [], []),
    create_base_info: IDL.Func([SetBaseInfoRes], [], []),
    create_podcast: IDL.Func([PodcastIterm], [], []),
    delete_owner: IDL.Func([IDL.Principal], [], []),
    deposit: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    get_admin: IDL.Func([], [IDL.Opt(IDL.Principal)], ['query']),
    get_canister_status: IDL.Func([IDL.Principal], [Result_1], []),
    get_owner: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_podcast: IDL.Func([IDL.Nat64], [IDL.Opt(PodcastIterm)], ['query']),
    get_podcast_base_info: IDL.Func([], [Info], ['query']),
    get_podcast_list: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat64, PodcastIterm))], ['query']),
    get_social_link: IDL.Func([], [SocialLink], ['query']),
    set_social_link: IDL.Func([SocialLink], [], []),
    update_base_info: IDL.Func([SetBaseInfoRes], [], []),
    update_podcast: IDL.Func([IDL.Nat64, PodcastIterm], [Result_2], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
