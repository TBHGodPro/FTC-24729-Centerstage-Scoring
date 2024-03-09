import { useState } from 'react';
import { AutonState } from './Types';

class State {
  private _auton: [AutonState, React.Dispatch<React.SetStateAction<AutonState>>];

  public get auton() {
    return this._auton[0];
  }

  public setAuton(bot: 'one' | 'two', item: 'prop' | 'purple' | 'yellow' | 'park', value: boolean | 'invert'): void;
  public setAuton(bot: 'both', item: 'backstage' | 'backdrop', value: number): void;
  public setAuton(bot: any, item: any, value: any): void {
    if (bot === 'both')
      this._auton[1]({
        ...this.auton,
        [item]: typeof value === 'number' ? this.auton[item] + value : value,
      });
    else
      this._auton[1]({
        ...this.auton,
        [bot]: {
          ...this.auton[bot],
          [item]: value === 'invert' ? !this.auton[bot][item] : value,
        },
      });
  }

  public initAuton() {
    this._auton = useState<AutonState>({
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
    });
  }

  public getAutonTerm(): string {
    let main = 0;

    if (this.auton.one.purple) main += 1;
    if (this.auton.one.yellow) main += 1;
    if (this.auton.two.purple) main += 1;
    if (this.auton.two.yellow) main += 1;

    return `${main}+${this.auton.backdrop}+${this.auton.backstage}`;
  }
}

export default new State();
