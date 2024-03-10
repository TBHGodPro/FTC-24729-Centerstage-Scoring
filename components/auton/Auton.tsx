import { Image, Pressable, Text, View } from 'react-native';
import SpecialStyles from '../SpecialStyles';
import State from '../State';
import Styles from '../Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import GenericStyles from '../GenericStyles';

export default function Auton() {
  State.auton.init();

  return (
    <View style={Styles.Item}>
      {/* Title */}
      <Text style={[Styles.Header, GenericStyles.textAlign.left]}>
        {/* Hack to get space without formatting it */}
        AUTON {' ' + ''} {State.auton.getTerm()}
      </Text>

      {/* Reset Button */}
      <Pressable
        style={Styles.ResetButton}
        onPress={() => State.auton.reset()}
      >
        <Ionicons
          style={Styles.ResetButtonIcon}
          name='reload'
        />
      </Pressable>

      {/* Bots */}
      <View style={Styles.HorizontalContainer}>
        {/* Bot 1 */}
        <View style={Styles.HalfWidthItem}>
          {/* Prop */}
          <Pressable
            onPress={() => State.auton.set('one', 'prop', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.one.prop, '#ffa0a0')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 80, 7, 4)}
              source={require('../../assets/icons/Prop.png')}
            ></Image>
          </Pressable>
          {/* Park */}
          <Pressable
            onPress={() => State.auton.set('one', 'park', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.one.park, '#5d5')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(90, 80, -4, 7)}
              source={require('../../assets/icons/Park.png')}
            ></Image>
          </Pressable>
          {/* Purple */}
          <Pressable
            onPress={() => State.auton.set('one', 'purple', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.one.purple, '#d78DeF')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 0, 11.5)}
              source={require('../../assets/icons/PurplePixel.png')}
            ></Image>
          </Pressable>
          {/* Yellow */}
          <Pressable
            onPress={() => State.auton.set('one', 'yellow', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.one.yellow, '#FFE900')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 4, 10)}
              source={require('../../assets/icons/YellowPixel.png')}
            ></Image>
          </Pressable>
        </View>

        {/* Separator */}
        <View style={Styles.SeparatorVertical}></View>

        {/* Bot 2 */}
        <View style={Styles.HalfWidthItem}>
          {/* Prop */}
          <Pressable
            onPress={() => State.auton.set('two', 'prop', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.two.prop, '#ffa0a0')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 80, 7, 4)}
              source={require('../../assets/icons/Prop.png')}
            ></Image>
          </Pressable>
          {/* Park */}
          <Pressable
            onPress={() => State.auton.set('two', 'park', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.two.park, '#5d5')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(90, 80, -4, 7)}
              source={require('../../assets/icons/Park.png')}
            ></Image>
          </Pressable>
          {/* Purple */}
          <Pressable
            onPress={() => State.auton.set('two', 'purple', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.two.purple, '#d78DeF')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 0, 11.5)}
              source={require('../../assets/icons/PurplePixel.png')}
            ></Image>
          </Pressable>
          {/* Yellow */}
          <Pressable
            onPress={() => State.auton.set('two', 'yellow', 'invert')}
            style={SpecialStyles.ToggleButton.Button(State.auton.value.two.yellow, '#FFE900')}
          >
            <Image
              style={SpecialStyles.ToggleButton.Icon(80, 70, 4, 10)}
              source={require('../../assets/icons/YellowPixel.png')}
            ></Image>
          </Pressable>
        </View>
      </View>

      {/* Backdrop */}
      <View style={SpecialStyles.Counter.Container}>
        <Text style={SpecialStyles.Counter.Title}>Backdrop</Text>
        <Pressable
          onPress={() => (State.auton.value.backdrop > 0 ? State.auton.set('both', 'backdrop', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.auton.value.backdrop}</Text>
        <Pressable
          onPress={() => State.auton.set('both', 'backdrop', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>

      {/* Backstage */}
      <View style={SpecialStyles.Counter.Container}>
        <Text style={SpecialStyles.Counter.Title}>Backstage</Text>
        <Pressable
          onPress={() => (State.auton.value.backstage > 0 ? State.auton.set('both', 'backstage', -1) : null)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>-</Text>
        </Pressable>
        <Text style={SpecialStyles.Counter.Text}>{State.auton.value.backstage}</Text>
        <Pressable
          onPress={() => State.auton.set('both', 'backstage', 1)}
          style={SpecialStyles.Counter.Button}
        >
          <Text style={SpecialStyles.Counter.ButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
