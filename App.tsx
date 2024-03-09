import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Styles from './components/Styles';
import Auton from './components/Auton';

export default function App() {
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.Scroll}>
        <Auton />
      </ScrollView>
    </View>
  );
}
