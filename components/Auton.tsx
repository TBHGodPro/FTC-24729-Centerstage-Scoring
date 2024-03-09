import { Alert, Button, Image, Pressable, Text, View } from 'react-native';
import Styles from './Styles';
import SpecialStyles from './SpecialStyles';
import State from './State';

export default function Auton() {
  State.initAuton();

  return (
    <View>
      {/* Title */}
      <Text style={Styles.Header}>AUTON    {State.getAutonTerm()}</Text>
      {/* Separator */}
        <View style={Styles.SeparatorHorizontal}></View>
      {/* Bot 1 */}
      <View style={Styles.HorizontalContainer}>
        <View style={Styles.HalfWidthItem}>
          {/* Prop */}
          <Pressable
            onPress={() => State.setAuton('one', 'prop', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.one.prop, '#ffa0a0')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 80, 7, 4)}
              source={require('../assets/icons/Prop.png')}
            ></Image>
          </Pressable>
          {/* Park */}
          <Pressable
            onPress={() => State.setAuton('one', 'park', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.one.park, '#aaa')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(90, 80, -4, 7)}
              source={require('../assets/icons/Park.png')}
            ></Image>
          </Pressable>
          {/* Purple */}
          <Pressable
            onPress={() => State.setAuton('one', 'purple', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.one.purple, '#d78DeF')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 0, 11.5)}
              source={require('../assets/icons/PurplePixel.png')}
            ></Image>
          </Pressable>
          {/* Yellow */}
          <Pressable
            onPress={() => State.setAuton('one', 'yellow', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.one.yellow, '#FFE900')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 4, 10)}
              source={require('../assets/icons/YellowPixel.png')}
            ></Image>
          </Pressable>
        </View>
        {/* Separator */}
        <View style={Styles.SeparatorVertical}></View>
        {/* Bot 2 */}
        <View style={Styles.HalfWidthItem}>
          {/* Prop */}
          <Pressable
            onPress={() => State.setAuton('two', 'prop', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.two.prop, '#ffa0a0')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 80, 7, 4)}
              source={require('../assets/icons/Prop.png')}
            ></Image>
          </Pressable>
          {/* Park */}
          <Pressable
            onPress={() => State.setAuton('two', 'park', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.two.park, '#aaa')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(90, 80, -4, 7)}
              source={require('../assets/icons/Park.png')}
            ></Image>
          </Pressable>
          {/* Purple */}
          <Pressable
            onPress={() => State.setAuton('two', 'purple', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.two.purple, '#d78DeF')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 0, 11.5)}
              source={require('../assets/icons/PurplePixel.png')}
            ></Image>
          </Pressable>
          {/* Yellow */}
          <Pressable
            onPress={() => State.setAuton('two', 'yellow', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.two.yellow, '#FFE900')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 4, 10)}
              source={require('../assets/icons/YellowPixel.png')}
            ></Image>
          </Pressable>
        </View>
      </View>
      {/* Backdrop */}
      <Text style={SpecialStyles.Counter.Title}>BACKDROP</Text>
      <View style={SpecialStyles.Counter.Container}>
        <Pressable
          onPress={() => (State.auton.backdrop > 0 ? State.setAuton('both', 'backdrop', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.auton.backdrop}</Text>
        <Pressable
          onPress={() => State.setAuton('both', 'backdrop', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>
      {/* Backstage */}
      <Text style={SpecialStyles.Counter.Title}>BACKSTAGE</Text>
      <View style={SpecialStyles.Counter.Container}>
        <Pressable
          onPress={() => (State.auton.backstage > 0 ? State.setAuton('both', 'backstage', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.auton.backstage}</Text>
        <Pressable
          onPress={() => State.setAuton('both', 'backstage', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
