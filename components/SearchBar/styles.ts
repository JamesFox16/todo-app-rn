import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#dedede',
    marginHorizontal: 10,
    borderRadius: 8,
    maxWidth: '85%',
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    flexGrow: 1,
    flexShrink: 1,
  }
});