import { idlFactory as DIP20IDL } from '../dip20';
import DIP20Actor from '../dip20/types';
import EXTIDL from '../ext';
import EXTActor from '../ext/types';
export { DIP20Actor, DIP20IDL, EXTActor, EXTIDL };

export const supportTokensList: supportTokenItem[] = [
  {
    token: 'GHOST',
    listMin: 5000,
    listMax: 1e8,
    standard: 'EXT',
    cid: 'fjbi2-fyaaa-aaaan-qanjq-cai',
  },
  {
    token: 'ICP',
    listMin: 1,
    listMax: 1e8,
    standard: 'ICP',
  },
  {
    token: 'NDP',
    listMin: 10,
    listMax: 1e8,
    standard: 'DIP20',
    cid: 'vgqnj-miaaa-aaaal-qaapa-cai',
  },
];

/////////////////////////////
//  Types
/////////////////////////////

export type tokenType = 'ICP' | 'GHOST' | 'NDP';

export interface supportTokenItem {
  token: tokenType;
  listMin: number;
  listMax: number;
  standard?: tokenStandardType;
  // except icp ,other tokens must config these filed
  cid?: string;
}

export type tokenStandardType = 'EXT' | 'DIP20' | 'ICP';
