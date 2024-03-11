import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';
import Styles from '../../../assets/styles/MainStyles';
import SpecialStyles from '../../../assets/styles/SpecialStyles';
import State from '../../../state/State';

export default function TeleOp() {
  State.teleop.init();

  return (
    <View style={Styles.Item}>
      {/* Title */}
      <Text style={Styles.Header}>TELEOP</Text>

      {/* Reset Button */}
      <Pressable
        style={Styles.ResetButton}
        onPress={() => State.teleop.reset()}
      >
        <Ionicons
          style={Styles.ResetButtonIcon}
          name='reload'
        />
      </Pressable>

      {/* Mosaics */}
      <View style={SpecialStyles.Counter.Container}>
        <Text style={SpecialStyles.Counter.Title}>Mosaics</Text>
        <Pressable
          onPress={() => (State.teleop.value.mosaics > 0 ? State.teleop.set('mosaics', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.teleop.value.mosaics}</Text>
        <Pressable
          onPress={() => State.teleop.set('mosaics', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>

      {/* Set Lines */}
      <View style={SpecialStyles.Counter.Container}>
        <Text style={SpecialStyles.Counter.Title}>Set Lines</Text>
        <Pressable
          onPress={() => (State.teleop.value.setLines > 0 ? State.teleop.set('setLines', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.teleop.value.setLines}</Text>
        <Pressable
          onPress={() => (State.teleop.value.setLines < 3 ? State.teleop.set('setLines', 1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>

      {/* Backdrop */}
      <View style={SpecialStyles.Counter.Container}>
        <Text style={SpecialStyles.Counter.Title}>Backdrop</Text>
        <Pressable
          onPress={() => (State.teleop.value.backdrop > 0 ? State.teleop.set('backdrop', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.teleop.value.backdrop}</Text>
        <Pressable
          onPress={() => State.teleop.set('backdrop', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>

      {/* Backstage */}
      <View style={SpecialStyles.Counter.Container}>
        <Text style={SpecialStyles.Counter.Title}>Backstage</Text>
        <Pressable
          onPress={() => (State.teleop.value.backstage > 0 ? State.teleop.set('backstage', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.teleop.value.backstage}</Text>
        <Pressable
          onPress={() => State.teleop.set('backstage', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
