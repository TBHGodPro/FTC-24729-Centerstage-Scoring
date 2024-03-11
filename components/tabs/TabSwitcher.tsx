import Ionicons from '@expo/vector-icons/Ionicons';
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
        <Ionicons
          style={SpecialStyles.TabSwitcher.ButtonIcon(Tab.SCORING)}
          name='list'
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
      {/* Info */}
      <Pressable
        style={SpecialStyles.TabSwitcher.Button(Tab.INFO)}
        onPress={() => State.tabs.set(Tab.INFO)}
      >
        <Ionicons
          style={SpecialStyles.TabSwitcher.ButtonIcon(Tab.INFO)}
          name='information'
        />
      </Pressable>
    </View>
  );
}
