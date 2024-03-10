import { useState } from 'react';
import AutonState from './auton/AutonState';
import TeleOpState from './teleop/TeleOpState';

class State {
  public readonly auton = new AutonState();
  public readonly teleop = new TeleOpState();
}

export default new State();
