import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#dedede',
    borderRadius: 8,
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    flexGrow: 1,
  },
  addTaskButton: {
    width: "100%",
    backgroundColor: 'black',
    padding: 16,
    marginTop: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});