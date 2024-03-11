import { ScrollView, View } from 'react-native';
import { screenSize } from '../../Constants';
import Styles from '../../assets/styles/MainStyles';
import State from '../../state/State';
import Auton from './auton/Auton';
import TeleOp from './teleop/TeleOp';

export default function Scoring() {
  return (
    <View style={Styles.FullBox(State.tabs.value * -screenSize.width)}>
      <ScrollView style={Styles.Scroll}>
        <Auton />
        <TeleOp />
      </ScrollView>
    </View>
  );
}
