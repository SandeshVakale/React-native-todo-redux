import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    zIndex: 5,
  },
  input: {
    width: '85%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  }
});
