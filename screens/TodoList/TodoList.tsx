import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import TodoListTask from '../../components/TodoListTask';
import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { ITask, useDatabase } from '../../hooks/useDatabase';

interface TodoListProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const TodoList = (props: TodoListProps) => {
  const { state: db } = useDatabase();
  const [filterText, setFilterText] = useState<string>('');
  const tasks = useMemo(() => db.taskList, [db.taskList]);

  const addNewTask = () => {
    props.navigation.navigate('AddTask');
  }

  const onChangeText = (text: string) => {
    setFilterText(text);
  }

  const onClearText = () => {
    setFilterText('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.headerActions}>
          <SearchBar
            placeholder='Search for a task'
            onChangeText={onChangeText}
            onClearText={onClearText}
            value={filterText}
          />
          <Pressable hitSlop={8} style={styles.addButton} onPress={addNewTask}>
            <Ionicons name='add' size={18} color='black' />
          </Pressable>
        </View>
      </View>
      {tasks.length > 0 && (
        <FlatList
          data={tasks.filter((task: ITask) => task.text.toLowerCase().includes(filterText.trim().toLowerCase()))}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
          renderItem={({ item }) => <TodoListTask task={item} />}
          ListEmptyComponent={() => <Text style={styles.emptyListText}>No tasks found matching '{filterText.toLowerCase()}'</Text>}
        />
      )}
      {tasks.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Press <Ionicons  name='add' size={18} color='#555' /> to get started
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default TodoList;