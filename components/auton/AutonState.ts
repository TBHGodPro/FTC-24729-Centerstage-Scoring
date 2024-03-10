import { useState } from 'react';

// Auton
export default class AutonState {
  private _auton: [AutonStateType, React.Dispatch<React.SetStateAction<AutonStateType>>];

  public get value() {
    return this._auton[0];
  }

  public set(bot: 'one' | 'two', item: 'prop' | 'purple' | 'yellow' | 'park', value: boolean | 'invert'): void;
  public set(bot: 'both', item: 'backstage' | 'backdrop', value: number): void;
  public set(bot: any, item: any, value: any): void {
    if (bot === 'both')
      this._auton[1]({
        ...this.value,
        [item]: typeof value === 'number' ? this.value[item] + value : value,
      });
    else
      this._auton[1]({
        ...this.value,
        [bot]: {
          ...this.value[bot],
          [item]: value === 'invert' ? !this.value[bot][item] : value,
        },
      });
  }

  public reset() {
    this._auton[1](defaultValues);
  }

  public init() {
    this._auton = useState<AutonStateType>(defaultValues);
  }

  public getTerm(): string {
    let main = 0;

    if (this.value.one.purple) main += 1;
    if (this.value.one.yellow) main += 1;
    if (this.value.two.purple) main += 1;
    if (this.value.two.yellow) main += 1;

    return `${main}+${this.value.backdrop}+${this.value.backstage}`;
  }
}

export interface AutonStateType {
  one: {
    prop: boolean;
    purple: boolean;
    yellow: boolean;
    park: boolean;
  };
  two: {
    prop: boolean;
    purple: boolean;
    yellow: boolean;
    park: boolean;
  };
  backdrop: number;
  backstage: number;
}

export const defaultValues: AutonStateType = {
  one: {
    prop: true,
    purple: false,
    yellow: false,
    park: false,
  },
  two: {
    prop: true,
    purple: false,
    yellow: false,
    park: false,
  },
  backdrop: 0,
  backstage: 0,
};
