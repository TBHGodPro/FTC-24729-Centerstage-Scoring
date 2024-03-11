import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Styles from './components/assets/styles/MainStyles';
import Auton from './components/tabs/scoring/auton/Auton';
import TeleOp from './components/tabs/scoring/teleop/TeleOp';
import Scoring from './components/tabs/scoring/Scoring';
import TabSwitcher from './components/tabs/TabSwitcher';
import State from './components/state/State';

export default function App() {
  State.tabs.init();

  return (
    <View style={Styles.Container}>
      <Scoring />

      <TabSwitcher />
    </View>
  );
}
