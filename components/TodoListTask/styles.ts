import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 12,
    padding: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    width: '80%',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    width: '80%',
    textAlign: 'left',
    fontSize: 16,
    color: '#aaa'
  }
});