import type { Principal } from '@dfinity/principal';
export type Award = { 'one' : null } |
  { 'two' : null } |
  { 'three' : null } |
  { 'five' : null } |
  { 'four' : null } |
  { 'jackpot' : null } |
  { 'losing' : null };
export type BlockIndex = bigint;
export interface ICP { 'e8s' : bigint }
export interface Lottery {
  'approve' : () => Promise<bigint>,
  'buyLottery' : (arg_0: Array<LotteryType>, arg_1: bigint) => Promise<Result>,
  'check' : () => Promise<WinnerAmount__1>,
  'currentLottery' : () => Promise<[] | [LotteryType]>,
  'getBonusList' : () => Promise<Array<UserWinnerAmountTuples>>,
  'historyLottery' : () => Promise<Array<[bigint, LotteryType]>>,
  'lotterySummarize' : () => Promise<LotterySummarize>,
  'record' : () => Promise<Array<LotteryData>>,
  'searchSechduleWinnerData' : (arg_0: Array<Schedule>) => Promise<
      Array<[Schedule, [] | [WinningRecord]]>
    >,
  'withdrawal' : (arg_0: Principal) => Promise<TransferResult>,
}
export interface LotteryData {
  'lottery' : Lottery__1,
  'award' : [] | [Award],
  'timestamp' : Time,
  'buyer' : Principal,
  'winnerAmount' : [] | [WinnerAmount],
}
export type LotteryStep = { 'final' : null } |
  { 'first' : null } |
  { 'notBegin' : null } |
  { 'second' : null };
export interface LotterySummarize {
  'currentBuySchedule' : bigint,
  'step' : LotteryStep,
  'currentLotterySchedule' : bigint,
  'bonusPool' : bigint,
  'userCumulativeAmount' : WinnerAmount,
  'startupTime' : bigint,
}
export interface LotteryType { 'red' : [] | [number], 'white' : Array<number> }
export interface Lottery__1 { 'red' : [] | [number], 'white' : Array<number> }
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export type Schedule = bigint;
export type Time = bigint;
export type TransferError = {
    'TxTooOld' : { 'allowed_window_nanos' : bigint }
  } |
  { 'BadFee' : { 'expected_fee' : ICP } } |
  { 'TxDuplicate' : { 'duplicate_of' : BlockIndex } } |
  { 'TxCreatedInFuture' : null } |
  { 'InsufficientFunds' : { 'balance' : ICP } };
export type TransferResult = { 'Ok' : BlockIndex } |
  { 'Err' : TransferError };
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
