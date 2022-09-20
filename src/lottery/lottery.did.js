export const idlFactory = ({ IDL }) => {
  const LotteryType = IDL.Record({
    'red' : IDL.Opt(IDL.Nat8),
    'white' : IDL.Vec(IDL.Nat8),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const WinnerAmount__1 = IDL.Nat64;
  const WinnerAmount = IDL.Nat64;
  const UserWinnerAmountTuples = IDL.Tuple(IDL.Principal, WinnerAmount);
  const LotteryStep = IDL.Variant({
    'final' : IDL.Null,
    'first' : IDL.Null,
    'notBegin' : IDL.Null,
    'second' : IDL.Null,
  });
  const LotterySummarize = IDL.Record({
    'currentBuySchedule' : IDL.Nat,
    'step' : LotteryStep,
    'currentLotterySchedule' : IDL.Nat,
    'bonusPool' : IDL.Nat64,
    'userCumulativeAmount' : WinnerAmount,
    'startupTime' : IDL.Nat,
  });
  const Lottery__1 = IDL.Record({
    'red' : IDL.Opt(IDL.Nat8),
    'white' : IDL.Vec(IDL.Nat8),
  });
  const Award = IDL.Variant({
    'one' : IDL.Null,
    'two' : IDL.Null,
    'three' : IDL.Null,
    'five' : IDL.Null,
    'four' : IDL.Null,
    'jackpot' : IDL.Null,
    'losing' : IDL.Null,
  });
  const Time = IDL.Int;
  const LotteryData = IDL.Record({
    'lottery' : Lottery__1,
    'award' : IDL.Opt(Award),
    'timestamp' : Time,
    'buyer' : IDL.Principal,
    'winnerAmount' : IDL.Opt(WinnerAmount),
  });
  const Schedule = IDL.Nat;
  const WinningData = IDL.Record({ 'num' : IDL.Nat64, 'amount' : IDL.Nat64 });
  const WinningRecord = IDL.Record({
    'one' : WinningData,
    'two' : WinningData,
    'three' : WinningData,
    'five' : WinningData,
    'four' : WinningData,
    'jackpot' : WinningData,
    'losing' : WinningData,
  });
  const BlockIndex = IDL.Nat64;
  const ICP = IDL.Record({ 'e8s' : IDL.Nat64 });
  const TransferError = IDL.Variant({
    'TxTooOld' : IDL.Record({ 'allowed_window_nanos' : IDL.Nat64 }),
    'BadFee' : IDL.Record({ 'expected_fee' : ICP }),
    'TxDuplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'TxCreatedInFuture' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : ICP }),
  });
  const TransferResult = IDL.Variant({
    'Ok' : BlockIndex,
    'Err' : TransferError,
  });
  const Lottery = IDL.Service({
    'approve' : IDL.Func([], [IDL.Nat64], []),
    'buyLottery' : IDL.Func([IDL.Vec(LotteryType), IDL.Nat64], [Result], []),
    'check' : IDL.Func([], [WinnerAmount__1], ['query']),
    'currentLottery' : IDL.Func([], [IDL.Opt(LotteryType)], ['query']),
    'getBonusList' : IDL.Func([], [IDL.Vec(UserWinnerAmountTuples)], ['query']),
    'historyLottery' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, LotteryType))],
        ['query'],
      ),
    'lotterySummarize' : IDL.Func([], [LotterySummarize], ['query']),
    'record' : IDL.Func([], [IDL.Vec(LotteryData)], ['query']),
    'searchSechduleWinnerData' : IDL.Func(
        [IDL.Vec(Schedule)],
        [IDL.Vec(IDL.Tuple(Schedule, IDL.Opt(WinningRecord)))],
        ['query'],
      ),
    'withdrawal' : IDL.Func([IDL.Principal], [TransferResult], []),
  });
  return Lottery;
};
export const init = ({ IDL }) => { return []; };
