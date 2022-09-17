import type { Principal } from '@dfinity/principal';
export type Award = { 'one' : null } |
  { 'two' : null } |
  { 'three' : null } |
  { 'five' : null } |
  { 'four' : null } |
  { 'jackpot' : null } |
  { 'losing' : null };
export interface AwardAmount {
  'one' : bigint,
  'two' : bigint,
  'three' : bigint,
  'five' : bigint,
  'four' : bigint,
  'jackpot' : bigint,
  'losing' : bigint,
}
export interface Lottery {
  'buyLottery' : (arg_0: Array<LotteryType>) => Promise<TxReceipt>,
  'check' : () => Promise<WinnerAmount__1>,
  'checkData' : (arg_0: Schedule) => Promise<Array<[LotteryId, LotteryData]>>,
  'currentLottery' : () => Promise<[] | [LotteryType]>,
  'extract' : (arg_0: Principal, arg_1: bigint) => Promise<boolean>,
  'getBonusList' : () => Promise<Array<UserWinnerAmountTuples>>,
  'getLotteryData' : () => Promise<Array<[LotteryId, LotteryData]>>,
  'getPoundage' : () => Promise<bigint>,
  'getSaleData' : () => Promise<Array<[Schedule, Array<LotteryId>]>>,
  'historyLottery' : () => Promise<Array<[bigint, LotteryType]>>,
  'injectFunds' : (arg_0: bigint) => Promise<TxReceipt>,
  'lock' : () => Promise<boolean>,
  'lotterySummarize' : () => Promise<LotterySummarize>,
  'record' : () => Promise<Array<LotteryData>>,
  'searchSechduleWinnerData' : (arg_0: Array<Schedule>) => Promise<
      Array<[Schedule, [] | [WinningRecord]]>
    >,
  'unlock' : () => Promise<boolean>,
  'withdrawal' : (arg_0: Principal) => Promise<TxReceipt>,
}
export interface LotteryData {
  'lottery' : Lottery__1,
  'award' : [] | [Award],
  'timestamp' : Time,
  'buyer' : Principal,
  'winnerAmount' : [] | [WinnerAmount],
}
export type LotteryId = bigint;
export type LotteryStep = { 'final' : null } |
  { 'first' : null } |
  { 'notBegin' : null } |
  { 'second' : null };
export interface LotterySummarize {
  'currentBuySchedule' : bigint,
  'lotteryUnitPrice' : bigint,
  'award' : AwardAmount,
  'step' : LotteryStep,
  'currentLotterySchedule' : bigint,
  'bonusPool' : bigint,
  'userCumulativeAmount' : WinnerAmount,
  'startupTime' : bigint,
}
export interface LotteryType { 'red' : [] | [number], 'white' : Array<number> }
export interface Lottery__1 { 'red' : [] | [number], 'white' : Array<number> }
export type Schedule = bigint;
export type Time = bigint;
export type TxReceipt = { 'Ok' : bigint } |
  {
    'Err' : { 'InsufficientAllowance' : null } |
      { 'InsufficientBalance' : null } |
      { 'ErrorOperationStyle' : null } |
      { 'Unauthorized' : null } |
      { 'LedgerTrap' : null } |
      { 'ErrorTo' : null } |
      { 'Other' : string } |
      { 'BlockUsed' : null } |
      { 'AmountTooSmall' : null }
  };
export type UserWinnerAmountTuples = [Principal, WinnerAmount];
export type WinnerAmount = bigint;
export type WinnerAmount__1 = bigint;
export interface WinningData { 'num' : bigint, 'amount' : bigint }
export interface WinningRecord {
  'one' : WinningData,
  'two' : WinningData,
  'three' : WinningData,
  'five' : WinningData,
  'four' : WinningData,
  'jackpot' : WinningData,
  'losing' : WinningData,
}
export interface _SERVICE extends Lottery {}
