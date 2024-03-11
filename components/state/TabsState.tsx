import { useState } from 'react';

export default class TabsState {
  private _tab: [Tab, React.Dispatch<React.SetStateAction<Tab>>];

  public get value(): Tab {
    return this._tab[0];
  }

  public set(tab: Tab) {
    this._tab[1](tab);
  }

  public reset() {
    this._tab[1](defaultValue);
  }

  public init() {
    this._tab = useState<Tab>(defaultValue);
  }
}

export enum Tab {
  SCORING,
  PRACTICE,
  INFO,
}

export const defaultValue: Tab = Tab.SCORING;
