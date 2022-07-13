export default ({ IDL }) => {
  const SubAccount__1 = IDL.Vec(IDL.Nat8);
  const TokenIndex = IDL.Nat32;
  const AccountIdentifier__1 = IDL.Text;
  const Settlement = IDL.Record({
    subaccount: SubAccount__1,
    seller: IDL.Principal,
    buyer: AccountIdentifier__1,
    price: IDL.Nat64,
  });
  const Metadata = IDL.Variant({
    fungible: IDL.Record({
      decimals: IDL.Nat8,
      metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
      name: IDL.Text,
      symbol: IDL.Text,
    }),
    nonfungible: IDL.Record({ metadata: IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    principal: IDL.Principal,
    address: AccountIdentifier,
  });
  const BalanceRequest = IDL.Record({
    token: TokenIdentifier,
    user: User,
  });
  const Balance = IDL.Nat;
  const CommonError__1 = IDL.Variant({
    InvalidToken: TokenIdentifier,
    Other: IDL.Text,
  });
  const BalanceResponse = IDL.Variant({
    ok: Balance,
    err: CommonError__1,
  });
  const TokenIdentifier__1 = IDL.Text;
  const CommonError = IDL.Variant({
    InvalidToken: TokenIdentifier,
    Other: IDL.Text,
  });
  const Result_7 = IDL.Variant({
    ok: AccountIdentifier__1,
    err: CommonError,
  });
  const Balance__1 = IDL.Nat;
  const Time = IDL.Int;
  const Listing = IDL.Record({
    locked: IDL.Opt(Time),
    seller: IDL.Principal,
    price: IDL.Nat64,
  });
  const Result_9 = IDL.Variant({
    ok: IDL.Tuple(AccountIdentifier__1, IDL.Opt(Listing)),
    err: CommonError,
  });
  const Extension = IDL.Text;
  const Generation = IDL.Nat8;
  const BreedId = IDL.Nat32;
  const Wearable = IDL.Record({
    hat: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
    pet: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
    accessory: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
    eyewear: IDL.Opt(IDL.Tuple(IDL.Nat32, IDL.Nat32)),
  });
  const Transaction2 = IDL.Record({
    token: TokenIdentifier__1,
    time: Time,
    seller: IDL.Principal,
    buyer: AccountIdentifier__1,
    price: IDL.Nat64,
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    url: IDL.Text,
    method: IDL.Text,
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(HeaderField),
  });
  const HttpResponse = IDL.Record({
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(HeaderField),
    status_code: IDL.Nat16,
  });
  const Result_8 = IDL.Variant({ ok: TokenIndex, err: CommonError });
  const ListRequest = IDL.Record({
    token: TokenIdentifier__1,
    from_subaccount: IDL.Opt(SubAccount__1),
    price: IDL.Opt(IDL.Nat64),
  });
  const Result_3 = IDL.Variant({ ok: IDL.Null, err: CommonError });
  const Result_6 = IDL.Variant({ ok: Metadata, err: CommonError });
  const MintRequest = IDL.Record({
    to: User,
    metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Memo__1 = IDL.Vec(IDL.Nat8);
  const User__1 = IDL.Variant({
    principal: IDL.Principal,
    address: AccountIdentifier,
  });
  const NotifyLog = IDL.Record({
    tokenid: TokenIdentifier__1,
    memo: Memo__1,
    user: User__1,
    amount: Balance__1,
  });
  const Result_5 = IDL.Variant({
    ok: IDL.Tuple(AccountIdentifier__1, IDL.Nat64),
    err: IDL.Text,
  });
  const Result_4 = IDL.Variant({ ok: IDL.Null, err: IDL.Text });
  const Sale = IDL.Record({
    token: TokenIndex,
    expires: Time,
    subaccount: SubAccount__1,
    buyer: AccountIdentifier__1,
    price: IDL.Nat64,
  });
  const SaleTransaction = IDL.Record({
    token: TokenIndex,
    time: Time,
    seller: IDL.Principal,
    buyer: AccountIdentifier__1,
    price: IDL.Nat64,
  });
  const SireRequest = IDL.Record({
    token: TokenIdentifier__1,
    from_subaccount: IDL.Opt(SubAccount__1),
    price: IDL.Opt(Balance__1),
  });
  const BreedData = IDL.Record({
    fee: IDL.Opt(Balance__1),
    canBreed: IDL.Bool,
    cost: Balance__1,
    generation: Generation,
    breedTime: IDL.Opt(Time),
  });
  const Sire = IDL.Record({
    metadata: IDL.Opt(IDL.Vec(IDL.Nat8)),
    index: TokenIndex,
    breedData: BreedData,
  });
  const Result_2 = IDL.Variant({ ok: Balance__1, err: CommonError });
  const Result_1 = IDL.Variant({
    ok: IDL.Vec(TokenIndex),
    err: CommonError,
  });
  const Result = IDL.Variant({
    ok: IDL.Vec(IDL.Tuple(TokenIndex, IDL.Opt(Listing), IDL.Opt(IDL.Vec(IDL.Nat8)), IDL.Opt(BreedData))),
    err: CommonError,
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const SubAccount = IDL.Vec(IDL.Nat8);
  const TransferRequest = IDL.Record({
    to: User,
    token: TokenIdentifier,
    notify: IDL.Bool,
    from: User,
    memo: Memo,
    subaccount: IDL.Opt(SubAccount),
    amount: Balance,
  });
  const TransferResponse = IDL.Variant({
    ok: Balance,
    err: IDL.Variant({
      CannotNotify: AccountIdentifier,
      InsufficientBalance: IDL.Null,
      InvalidToken: TokenIdentifier,
      Rejected: IDL.Null,
      Unauthorized: AccountIdentifier,
      Other: IDL.Text,
    }),
  });
  return IDL.Service({
    acceptCycles: IDL.Func([], [], []),
    adminKillHeartbeat: IDL.Func([], [], []),
    adminStartHeartbeat: IDL.Func([], [], []),
    allPayments: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(SubAccount__1)))], ['query']),
    allSettlements: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, Settlement))], ['query']),
    availableCycles: IDL.Func([], [IDL.Nat], ['query']),
    backup: IDL.Func(
      [],
      [
        IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1)),
        IDL.Vec(IDL.Tuple(AccountIdentifier__1, IDL.Vec(TokenIndex))),
        IDL.Vec(IDL.Tuple(TokenIndex, Metadata)),
      ],
      ['query']
    ),
    balance: IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    bearer: IDL.Func([TokenIdentifier__1], [Result_7], ['query']),
    clearPayments: IDL.Func([IDL.Principal, IDL.Vec(SubAccount__1)], [], []),
    crnDetails: IDL.Func(
      [],
      [IDL.Nat, Balance__1, IDL.Nat, IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1))],
      ['query']
    ),
    cronCapEvents: IDL.Func([], [], []),
    cronDisbursements: IDL.Func([], [], []),
    cronSettlements: IDL.Func([], [], []),
    details: IDL.Func([TokenIdentifier__1], [Result_9], ['query']),
    disbursements: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1, SubAccount__1, IDL.Nat64))],
      ['query']
    ),
    extensions: IDL.Func([], [IDL.Vec(Extension)], ['query']),
    failedSales: IDL.Func([], [IDL.Vec(IDL.Tuple(AccountIdentifier__1, SubAccount__1))], ['query']),
    generations: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Tuple(Generation, BreedId)))], ['query']),
    getAllPayments: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(SubAccount__1)))], ['query']),
    getAllWearables: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, Wearable))], ['query']),
    getBestPrice: IDL.Func([TokenIndex], [IDL.Opt(IDL.Nat64)], ['query']),
    getBuyers: IDL.Func([], [IDL.Vec(IDL.Tuple(AccountIdentifier__1, IDL.Vec(TokenIndex)))], ['query']),
    getMinted: IDL.Func([], [TokenIndex], ['query']),
    getMinter: IDL.Func([], [IDL.Principal], ['query']),
    getRegistry: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1))], ['query']),
    getSold: IDL.Func([], [TokenIndex], ['query']),
    getTokens: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))], ['query']),
    getTransactions: IDL.Func([IDL.Opt(IDL.Nat)], [IDL.Vec(Transaction2)], ['query']),
    historicExport: IDL.Func([], [IDL.Bool], []),
    http_request: IDL.Func([HttpRequest], [HttpResponse], ['query']),
    index: IDL.Func([TokenIdentifier__1], [Result_8], ['query']),
    initCap: IDL.Func([], [], []),
    list: IDL.Func([ListRequest], [Result_3], []),
    listings: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, Listing, Metadata))], ['query']),
    lock: IDL.Func([TokenIdentifier__1, IDL.Nat64, AccountIdentifier__1, SubAccount__1], [Result_7], []),
    metadata: IDL.Func([TokenIdentifier__1], [Result_6], ['query']),
    mintNFT: IDL.Func([MintRequest], [TokenIndex], []),
    notifications: IDL.Func([], [IDL.Vec(NotifyLog)], ['query']),
    payments: IDL.Func([], [IDL.Opt(IDL.Vec(SubAccount__1))], ['query']),
    receiveWearable: IDL.Func(
      [TokenIndex, TokenIndex, IDL.Vec(IDL.Nat8), AccountIdentifier__1],
      [
        IDL.Variant({
          replaced: TokenIndex,
          success: IDL.Null,
          failed: IDL.Null,
        }),
      ],
      []
    ),
    refresh: IDL.Func([], [], []),
    refunds: IDL.Func([], [IDL.Opt(IDL.Vec(SubAccount__1))], ['query']),
    removeRefunds: IDL.Func([IDL.Vec(SubAccount__1)], [], []),
    reserve: IDL.Func([TokenIdentifier__1, IDL.Nat64, AccountIdentifier__1, SubAccount__1], [Result_5], []),
    retreive: IDL.Func([AccountIdentifier__1], [Result_4], []),
    retreiveSnapshot: IDL.Func([IDL.Text], [IDL.Vec(AccountIdentifier__1)], []),
    salesSettlements: IDL.Func([], [IDL.Vec(IDL.Tuple(AccountIdentifier__1, Sale))], ['query']),
    salesStats: IDL.Func([], [IDL.Bool, IDL.Vec(IDL.Tuple(TokenIndex, Time, Metadata)), IDL.Nat], ['query']),
    salesTransactions: IDL.Func([], [IDL.Vec(SaleTransaction)], ['query']),
    setMinter: IDL.Func([IDL.Principal], [], []),
    settings: IDL.Func(
      [],
      [IDL.Bool, IDL.Vec(IDL.Nat8), Time, Time, Time, IDL.Vec(Balance__1), IDL.Principal],
      ['query']
    ),
    settle: IDL.Func([TokenIdentifier__1], [Result_3], []),
    settlements: IDL.Func([], [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1, IDL.Nat64))], ['query']),
    sire: IDL.Func([SireRequest], [Result_3], []),
    sires: IDL.Func([], [IDL.Vec(Sire)], ['query']),
    stats: IDL.Func([], [IDL.Nat64, IDL.Nat64, IDL.Nat64, IDL.Nat64, IDL.Nat, IDL.Nat, IDL.Nat], ['query']),
    supply: IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
    takeSnapshot: IDL.Func([IDL.Text], [IDL.Nat], []),
    tokenTransferNotification: IDL.Func([TokenIdentifier__1, User__1, Balance__1, Memo__1], [IDL.Opt(Balance__1)], []),
    tokens: IDL.Func([AccountIdentifier__1], [Result_1], ['query']),
    tokens_ext: IDL.Func([AccountIdentifier__1], [Result], ['query']),
    transactions: IDL.Func([], [IDL.Vec(Transaction2)], ['query']),
    transfer: IDL.Func([TransferRequest], [TransferResponse], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
