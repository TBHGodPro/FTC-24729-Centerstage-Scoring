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
    marginTop: 30,
    width: '97%',
    height: '100%',
  },

  Item: {
    marginTop: 20,
  },

  Header: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 15,
    letterSpacing: 1.5,
    padding: 5,
    paddingLeft: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#202030',
    borderRadius: 15,
    overflow: 'hidden',
  },

  ResetButton: {
    width: 40,
    height: 40,
    backgroundColor: '#303040',
    borderRadius: 100,
    position: 'absolute',
    top: 6.5,
    right: 25,
  },
  ResetButtonIcon: {
    color: 'white',
    fontSize: 24,
    position: 'absolute',
    left: 8,
    top: 8,
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
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 15,
    marginTop: -15,
  },

  HorizontalContainer: {
    flexDirection: 'row',
    marginBottom: 3,
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
