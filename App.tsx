import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddTask from './screens/AddTask';
import TodoList from './screens/TodoList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='TodoList'>
          <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTask}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
