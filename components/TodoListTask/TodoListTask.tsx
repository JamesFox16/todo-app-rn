import { Pressable, Text, View } from 'react-native';
import { ITask } from '../../hooks/useTasks';
import { styles } from './styles';
import CheckboxPressable from '../CheckboxPressable';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface TaskProps {
  task: ITask;
}
const TodoListTask = (props: TaskProps) => {
  const { task } = props;
  const [checked, setChecked] = useState<boolean>(task.completed);

  const deleteTask = () => {
    console.log('delete task: ', task.id);
  }

  return (
    <View style={styles.container}>
      <CheckboxPressable checked={checked} onPress={() => setChecked(!checked)} />
      <Text>{task.text}</Text>
      <Pressable onPress={deleteTask}>
        <Ionicons name='trash-outline' size={18} color='black' />
      </Pressable>
    </View>
  );
}

export default TodoListTask;