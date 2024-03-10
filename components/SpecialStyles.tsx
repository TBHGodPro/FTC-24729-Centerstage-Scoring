import { ColorValue } from 'react-native';

export default {
  ToggleButton: {
    Button: (active: boolean, activeColor: ColorValue) => ({
      backgroundColor: active ? activeColor : '#1b1b2b',
      minWidth: 85,
      maxWidth: 85,
      height: 90,
      borderRadius: 15,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    Icon: (width: number, height: number, left: number, top: number) => ({
      width,
      height,
      position: 'absolute',
      left,
      top,
    }),
  },

  Counter: {
    Container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 50,
      flexDirection: 'row',
      columnGap: 8,
      marginTop: 8,
      paddingLeft: 10.8,
    },
    Title: {
      textAlign: 'left',
      left: 6.5,
      color: 'white',
      fontSize: 16,
      letterSpacing: 0,
      position: 'absolute',
    },
    Text: {
      width: 50,
      height: 50,
      backgroundColor: '#30304a',
      borderRadius: 15,
      overflow: 'hidden',
      textAlign: 'center',
      color: 'white',
      fontSize: 25,
      paddingTop: 10,
    },
    Button: {
      width: 40,
      height: 40,
      backgroundColor: '#26263f',
      borderRadius: 15,
    },
    ButtonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 6.5,
    },
  },
};
