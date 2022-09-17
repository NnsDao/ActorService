export const idlFactory = ({ IDL }) => {
  const LotteryType = IDL.Record({
    'red' : IDL.Opt(IDL.Nat8),
    'white' : IDL.Vec(IDL.Nat8),
  });
  const TxReceipt = IDL.Variant({
    'Ok' : IDL.Nat,
    'Err' : IDL.Variant({
      'InsufficientAllowance' : IDL.Null,
      'InsufficientBalance' : IDL.Null,
      'ErrorOperationStyle' : IDL.Null,
      'Unauthorized' : IDL.Null,
      'LedgerTrap' : IDL.Null,
      'ErrorTo' : IDL.Null,
      'Other' : IDL.Text,
      'BlockUsed' : IDL.Null,
      'AmountTooSmall' : IDL.Null,
    }),
  });
  const WinnerAmount__1 = IDL.Nat64;
  const Schedule = IDL.Nat;
  const LotteryId = IDL.Nat;
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
  const WinnerAmount = IDL.Nat64;
  const LotteryData = IDL.Record({
    'lottery' : Lottery__1,
    'award' : IDL.Opt(Award),
    'timestamp' : Time,
    'buyer' : IDL.Principal,
    'winnerAmount' : IDL.Opt(WinnerAmount),
  });
  const UserWinnerAmountTuples = IDL.Tuple(IDL.Principal, WinnerAmount);
  const AwardAmount = IDL.Record({
    'one' : IDL.Nat64,
    'two' : IDL.Nat64,
    'three' : IDL.Nat64,
    'five' : IDL.Nat64,
    'four' : IDL.Nat64,
    'jackpot' : IDL.Nat64,
    'losing' : IDL.Nat64,
  });
  const LotteryStep = IDL.Variant({
    'final' : IDL.Null,
    'first' : IDL.Null,
    'notBegin' : IDL.Null,
    'second' : IDL.Null,
  });
  const LotterySummarize = IDL.Record({
    'currentBuySchedule' : IDL.Nat,
    'lotteryUnitPrice' : IDL.Nat64,
    'award' : AwardAmount,
    'step' : LotteryStep,
    'currentLotterySchedule' : IDL.Nat,
    'bonusPool' : IDL.Nat64,
    'userCumulativeAmount' : WinnerAmount,
    'startupTime' : IDL.Nat,
  });
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
  const Lottery = IDL.Service({
    'buyLottery' : IDL.Func([IDL.Vec(LotteryType)], [TxReceipt], []),
    'check' : IDL.Func([], [WinnerAmount__1], ['query']),
    'checkData' : IDL.Func(
        [Schedule],
        [IDL.Vec(IDL.Tuple(LotteryId, LotteryData))],
        ['query'],
      ),
    'currentLottery' : IDL.Func([], [IDL.Opt(LotteryType)], ['query']),
    'extract' : IDL.Func([IDL.Principal, IDL.Nat64], [IDL.Bool], []),
    'getBonusList' : IDL.Func([], [IDL.Vec(UserWinnerAmountTuples)], ['query']),
    'getLotteryData' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(LotteryId, LotteryData))],
        ['query'],
      ),
    'getPoundage' : IDL.Func([], [IDL.Nat64], ['query']),
    'getSaleData' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Schedule, IDL.Vec(LotteryId)))],
        ['query'],
      ),
    'historyLottery' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, LotteryType))],
        ['query'],
      ),
    'injectFunds' : IDL.Func([IDL.Nat], [TxReceipt], []),
    'lock' : IDL.Func([], [IDL.Bool], []),
    'lotterySummarize' : IDL.Func([], [LotterySummarize], ['query']),
    'record' : IDL.Func([], [IDL.Vec(LotteryData)], ['query']),
    'searchSechduleWinnerData' : IDL.Func(
        [IDL.Vec(Schedule)],
        [IDL.Vec(IDL.Tuple(Schedule, IDL.Opt(WinningRecord)))],
        ['query'],
      ),
    'unlock' : IDL.Func([], [IDL.Bool], []),
    'withdrawal' : IDL.Func([IDL.Principal], [TxReceipt], []),
  });
  return Lottery;
};
export const init = ({ IDL }) => { return []; };
