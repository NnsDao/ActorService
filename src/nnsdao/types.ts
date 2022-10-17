import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Result = { Ok: number } | { Err: string };
export interface StackingItem {
  principal: [] | [Principal];
  duration: number;
  amount: bigint;
}
export interface _SERVICE {
  stacking_list: ActorMethod<[], Array<[bigint, StackingItem]>>;
  test: ActorMethod<[], Result>;
}
