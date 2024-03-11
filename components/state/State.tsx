import AutonState from '../tabs/scoring/auton/AutonState';
import TeleOpState from '../tabs/scoring/teleop/TeleOpState';
import TabsState from './TabsState';

class State {
  public readonly tabs = new TabsState();

  public readonly auton = new AutonState();
  public readonly teleop = new TeleOpState();
}

export default new State();
