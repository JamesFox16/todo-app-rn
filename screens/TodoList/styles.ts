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
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  emptyText: {
    fontSize: 20,
    color: '#555',
  },
  emptyListText: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
    color: '#555',
  },
})