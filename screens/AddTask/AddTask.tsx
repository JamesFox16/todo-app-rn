import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDatabase } from '../../hooks/useDatabase';

interface AddTaskProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const AddTask = (props: AddTaskProps) => {
  const [taskText, setTaskText] = useState<string>('');
  const { addTask } = useDatabase();

  const onChangeText = (text: string) => {
    setTaskText(text);
  }

  const addTaskPress = () => {
    if (taskText) {
      addTask(taskText);
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