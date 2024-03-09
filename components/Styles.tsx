import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10101a',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '',
  },

  Scroll: {
    marginTop: 50,
    width: '97%',
    height: '100%',
  },

  Header: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 20,
    letterSpacing: 1.5
  },

  SeparatorVertical: {
    height: '100%',
    width: 3,
    backgroundColor: 'white',
    borderRadius: 100,
    marginLeft: 6,
    marginRight: 6,
  },
  SeparatorHorizontal: {
    height: 5,
    width: "90%",
    alignSelf: "center",
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 15,
    marginTop: -15,
  },

  HorizontalContainer: {
    flexDirection: 'row',
  },
  HalfWidthItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
  },
});
