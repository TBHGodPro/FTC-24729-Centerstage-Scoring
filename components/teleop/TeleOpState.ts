import { useState } from 'react';

// TeleOp
export default class TeleOpState {
  private _teleop: [TeleOpStateType, React.Dispatch<React.SetStateAction<TeleOpStateType>>];

  public get value() {
    return this._teleop[0];
  }

  public set(item: 'mosaics' | 'setLines' | 'backdrop' | 'backstage', value: number) {
    this._teleop[1]({
      ...this.value,
      [item]: this.value[item] + value,
    });
  }

  public reset() {
    this._teleop[1](defaultValues);
  }

  public init() {
    this._teleop = useState<TeleOpStateType>(defaultValues);
  }
}

export interface TeleOpStateType {
  // Loosely 0 - 5
  mosaics: number;
  // 0 - 3
  setLines: 0 | 1 | 2 | 3;
  backdrop: number;
  backstage: number;
}

export const defaultValues: TeleOpStateType = {
  mosaics: 0,
  setLines: 0,
  backdrop: 0,
  backstage: 0,
};
