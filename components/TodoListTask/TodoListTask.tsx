import { Pressable, Text, View } from 'react-native';
import { ITask, useDatabase } from '../../hooks/useDatabase';
import { styles } from './styles';
import CheckboxPressable from '../CheckboxPressable';
import { useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface TaskProps {
  task: ITask;
}
const TodoListTask = (props: TaskProps) => {
  const { task } = props;
  const { updateTaskCompleted, removeTask } = useDatabase();
  const completed = useMemo(() => task.completed === 1, [task.completed]);

  const deleteTask = () => {
    removeTask(task.id);
  }

  const updateTask = () => {
    const updatedTask = {
      ...task,
      completed: completed ? 0 : 1,
    } as ITask;
    updateTaskCompleted(updatedTask);
  }

  return (
    <View style={styles.container}>
      <CheckboxPressable hitSlop={10} checked={completed} onPress={updateTask} />
      <Text style={completed ? styles.textCompleted : styles.text}>{task.text}</Text>
      <Pressable onPress={deleteTask}>
        <Ionicons name='trash-outline' size={18} color='black' />
      </Pressable>
    </View>
  );
}

export default TodoListTask;