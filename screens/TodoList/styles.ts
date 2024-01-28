import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: 'flex',
    paddingBottom: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  headerActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 4,
    marginLeft: 8,
  },
  addButton: {
    flex: 1,
    flexShrink: 0,
  }
})