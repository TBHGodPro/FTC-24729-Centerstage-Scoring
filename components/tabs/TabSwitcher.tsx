import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import SpecialStyles from '../assets/styles/SpecialStyles';
import State from '../state/State';
import { Tab } from '../state/TabsState';

export default function TabSwitcher() {
  return (
    <View style={SpecialStyles.TabSwitcher.Container}>
      {/* Scoring */}
      <Pressable
        style={SpecialStyles.TabSwitcher.Button(Tab.SCORING)}
        onPress={() => State.tabs.set(Tab.SCORING)}
      >
        <MaterialIcons
          style={SpecialStyles.TabSwitcher.ButtonIcon(Tab.SCORING)}
          name='scoreboard'
        />
      </Pressable>
      {/* Practice */}
      <Pressable
        style={SpecialStyles.TabSwitcher.Button(Tab.PRACTICE)}
        onPress={() => State.tabs.set(Tab.PRACTICE)}
      >
        <Ionicons
          style={SpecialStyles.TabSwitcher.ButtonIcon(Tab.PRACTICE)}
          name='play'
        />
      </Pressable>
      {/* Records */}
      <Pressable
        style={SpecialStyles.TabSwitcher.Button(Tab.RECORDS)}
        onPress={() => State.tabs.set(Tab.RECORDS)}
      >
        <Ionicons
          style={SpecialStyles.TabSwitcher.ButtonIcon(Tab.RECORDS)}
          name='trophy'
        />
      </Pressable>
    </View>
  );
}
