import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTasks } from '../../hooks/useTasks';
import { styles } from './styles';

interface TodoListProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const TodoList = (props: TodoListProps) => {
  const { tasks } = useTasks();

  const addNewTask = () => {
    props.navigation.navigate('AddTask');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.headerActions}>
          <TextInput placeholder='Search for a task' />
          <Pressable onPress={addNewTask}>
            <Text>Add</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text>{item.text}</Text>
            <Pressable onPress={() => console.log('delete')}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default TodoList;