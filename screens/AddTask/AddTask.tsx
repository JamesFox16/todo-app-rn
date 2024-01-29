import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTasks } from '../../hooks/useTasks';

interface AddTaskProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const AddTask = (props: AddTaskProps) => {
  const [taskText, setTaskText] = useState<string>('');
  const { tasks, setTasks, taskId, setTaskId } = useTasks();

  const onChangeText = (text: string) => {
    setTaskText(text);
  }

  const addTaskPress = () => {
    if (taskText) {
      console.log('add task');
      // const newTask = {
      //   id: taskId,
      //   text: taskText,
      //   completed: false,
      // } as ITask;
      // console.log('newTask', newTask);
      // console.log('tasks', [...tasks, newTask]);
      // setTasks([...tasks, newTask]);
      // setTaskId(taskId + 1);
      props.navigation.goBack();
    }
  }
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText} />
      <Pressable onPress={addTaskPress}>
        <Text>Add Task</Text>
      </Pressable>
    </View>
  );
}

export default AddTask;