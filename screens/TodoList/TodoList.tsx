import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ITask, useTasks } from '../../hooks/useTasks';
import { styles } from './styles';
import TodoListTask from '../../components/TodoListTask';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface TodoListProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const TodoList = (props: TodoListProps) => {
  const { tasks } = useTasks();
  const [filterText, setFilterText] = useState<string>('');

  const addNewTask = () => {
    props.navigation.navigate('AddTask');
  }

  const onChangeText = (text: string) => {
    setFilterText(text);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.headerActions}>
          <TextInput placeholder='Search for a task' onChangeText={onChangeText} />
          <Pressable onPress={addNewTask}>
            <Ionicons name='add' size={18} color='black' />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={tasks.filter((task: ITask) => task.text.toLowerCase().includes(filterText.toLowerCase()))}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
        renderItem={({ item }) => <TodoListTask task={item} />}
      />
    </SafeAreaView>
  );
}

export default TodoList;