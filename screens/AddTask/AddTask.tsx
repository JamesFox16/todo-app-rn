import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
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
    <ScrollView keyboardDismissMode='on-drag' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus={true}
          style={styles.textInput}
          onChangeText={onChangeText}
          multiline={true}
        />
      </View>
      <Pressable style={styles.addTaskButton} onPress={addTaskPress}>
        <Text style={styles.addTaskText}>Add Task</Text>
      </Pressable>
    </ScrollView>
  );
}

export default AddTask;